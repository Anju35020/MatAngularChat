import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from 'src/app/crud/service/note.service';
import { ChatService } from 'src/app/shared/Services/chat.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  values: any;
  confirm: boolean;
  notesForm: FormGroup;
  storeId: any;
  getUserList: any;

  constructor(
    private chatService : ChatService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.chatService.get().subscribe((res)=>{
      console.log(res);
      this.values = res;
    })
  }

 
}
