import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedRest: string = ""
  selectedRestCode: any 
  userData: any
  UserRole: string
  constructor() { }

  setLoggedinUser(obj: any){
    this.userData = obj
    if(this.userData.role == "A" ||this.userData.role == "C" ){
      this.UserRole = this.userData.role 
    }
    else{
      this.UserRole = "R"
      this.selectedRestCode = this.userData.role 
      this.selectedRest = this.userData.firstName
    }

  }
}
