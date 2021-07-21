import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  restName: string
  restCode: string
  FeedbackForm!: FormGroup;
  rating : any = [1,2,3,4,5]
  foodList: any[] = [{name: "Burger", price: 2},{name: "Pizza", price: 1},{name: "Noodles", price: 3}];

  constructor(private httpservice: HttpService, private formBuilder: FormBuilder, private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    if (!this.dataservice.selectedRest) {
      this.router.navigateByUrl('/main/restraunt')
    }
    this.restName = this.dataservice.selectedRest
    this.restCode = this.dataservice.selectedRestCode
    this.FeedbackForm = this.formBuilder.group({
      food: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      feedback: ['', [Validators.required]],
    });

  }

  submit(){
    let req = {
      restCode: this.restCode,
      rating: this.FeedbackForm.value.rating,
      feedback: this.FeedbackForm.value.food.toUpperCase() + " - "+this.FeedbackForm.value.feedback
    }
    if(this.FeedbackForm.invalid){
      return
    }
    this.httpservice.postServiceCall("/feedback/create",req)
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
