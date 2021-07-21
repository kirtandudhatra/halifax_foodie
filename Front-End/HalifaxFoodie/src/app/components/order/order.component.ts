import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  restName: string
  OrderForm!: FormGroup;
  totalPrice: number = 0
  foodList: any[] = [{name: "Burger", price: 2},{name: "Pizza", price: 1},{name: "Noodles", price: 3}];
  orderList: any[] = []
  constructor(private httpservice: HttpService, private formBuilder: FormBuilder, private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    if (!this.dataservice.selectedRest) {
      this.router.navigateByUrl('/main/restraunt')
    }
    this.restName = this.dataservice.selectedRest
    this.OrderForm = this.formBuilder.group({
      food: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });

  }

  addToCart() {
    if(this.OrderForm.invalid){
      return  
    }
    let index = this.orderList.findIndex((o: any) => {return o.dish == this.OrderForm.value.food })
    if (index == -1) {
      let order = {
        dish: this.OrderForm.value.food,
        quantity: parseInt(this.OrderForm.value.quantity)
      }
      this.orderList.push(order)
    }
    else {
      this.orderList[index].quantity = this.orderList[index].quantity + parseInt(this.OrderForm.value.quantity)
    }
    let foodindex = (this.foodList.findIndex(o=>{return o.name == this.OrderForm.value.food}))
    console.log(this.foodList[foodindex])
    this.calcPrice(parseInt(this.OrderForm.value.quantity), parseInt(this.foodList[foodindex].price))
  }

  calcPrice(quant: number, price: number){
    let cost: number = quant * price
    this.totalPrice = this.totalPrice + cost
  }

  placeOrder(){
    if(this.orderList.length == 0){
      alert("Please add order to the list")
      return
    }
    else{
      let req = {
        restName: this.restName,
        orderList: this.orderList,
        totalPrice: this.totalPrice
      }
      this.httpservice.postServiceCall("/order/placeorder",req)
      .subscribe((result: any)=>{
        console.log(result)
        if(result.success){
          alert("Order Successfully Placed.")
          this.router.navigateByUrl('/main/restraunt')
        }
        else{
          
        }
      }, (error: any)=>{
        console.log(error)
        alert("Something went wrong!")
      })
    }
  }
}
