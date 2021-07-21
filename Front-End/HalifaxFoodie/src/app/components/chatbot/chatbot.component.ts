import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  chatMessages: any [] = []
  chatBotFormGroup:FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.chatBotFormGroup = this._formBuilder.group({
      message: ['', Validators.required],

    });


  }

  send(){

  }
}
