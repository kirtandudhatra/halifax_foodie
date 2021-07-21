import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  showRestList: boolean = false
  AddDishFormGroup: FormGroup;
  restList: any[] = [{name:"The Bicycle Thief", code: "001"}, {name:"McKelvies Restaurant", code: "002"}, {name:"2 Doors Down Food", code: "003"}]
  restCode: string = ""
  constructor(private dataservice: DataService, private router: Router, private _formBuilder: FormBuilder, private httpservice: HttpService) { }

  ngOnInit(): void {
    this.showRestList = true
    if(this.dataservice.userData && this.dataservice.UserRole == "A"){
      this.showRestList = true
    }
    if(this.dataservice.userData && this.dataservice.UserRole == "R"){
      this.restCode = this.dataservice.selectedRestCode
    }
    this.AddDishFormGroup = this._formBuilder.group({
      dishName: ['', Validators.required],
      price: ['', Validators.required],
    });

  }

  Add(){
    if(this.AddDishFormGroup.invalid){
      return
    }
    if(!this.restCode){
      alert("Invalid Restaurant Code")
      return
    }
    let req={
      restId: this.restCode ,
      dishName: this.AddDishFormGroup.value.dishName,
      price:this.AddDishFormGroup.value.price,

    }
    this.httpservice.postServiceCall("/restaurant/saveDish",req)
      .subscribe((result: any)=>{
        console.log(result)
        if(result.success){
          alert("Restaurant Add Successfully")
          this.AddDishFormGroup.reset()
        }
      }, (error)=>{
        console.log(error)
        alert("Something went wrong!")
      })
  }

}
