import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatService } from 'src/app/services/chat.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  chat$: Observable<any>;
  newMsg: string;
  chatId: any
  user:any
  constructor(private cs: ChatService, private route: ActivatedRoute, private dataservice: DataService) { }

  ngOnInit(): void {
    this.user = this.dataservice.userData
    this.chatId = this.route.snapshot.paramMap.get('id');
    const source = this.cs.get(this.chatId);
    this.chat$ = this.cs.joinUsers(source); 
    // this.chat$.subscribe((data)=>{
    //   console.log(data)
    // },(error)=>{
    //   console.log(error)
    // })
    // // this.scrollBottom();
  }

  submit(chatId) {
    if (!this.newMsg) {
      return alert('you need to enter something');
    }
    this.cs.sendMessage(this.chatId, this.newMsg);
    this.newMsg = '';
    //this.scrollBottom();
  }


  trackByCreated(i, msg) {
    return msg.createdAt;
  }

}
