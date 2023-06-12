import { NgModule } from '@angular/core';

import { ChatBoxRoutingModule } from './chat-box-routing.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';


@NgModule({
  declarations: [
    ChatBoxComponent,
    FriendListComponent,
    ChatPanelComponent
  ],
  imports: [
    ChatBoxRoutingModule
  ]
})
export class ChatBoxModule { }
