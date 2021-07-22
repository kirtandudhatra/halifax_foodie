import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  openChat: boolean= false
  userChats$;
  constructor(private dataservice: DataService, private router: Router, public cs: ChatService) { }

  ngOnInit(): void {
    if(this.dataservice && !this.dataservice.userData ){
      try {
        var userdata = localStorage.getItem("userData")
        if(userdata){
        this.dataservice.userData = JSON.parse(userdata)
        }
        else{
          this.router.navigateByUrl("/signin")
        }
      } catch (error) {
        this.router.navigateByUrl("/signin")
      }
    }
  }

  logout(){
    this.dataservice.userData = null
    localStorage.removeItem("userData")
    this.router.navigateByUrl("/signin")
  }
  createChat(){
    this.cs.create();
  }

  getChat(){
    const source = this.cs.get('z0zpkyl0MhRL3hrfr8gQ');
    console.log(source)
    var chat$ = this.cs.joinUsers(source);
  }

}
