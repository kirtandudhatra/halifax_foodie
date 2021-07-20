import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restraunt',
  templateUrl: './restraunt.component.html',
  styleUrls: ['./restraunt.component.css']
})
export class RestrauntComponent implements OnInit {

  constructor(private dataservice: DataService, private router : Router) { }

  ngOnInit(): void {
  }

  openRest(rest : any, restCode: any){
    this.dataservice.selectedRest = rest
    this.dataservice.selectedRestCode = restCode
    this.router.navigateByUrl("/main/orders")
  }
}
