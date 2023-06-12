import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatBoxRoutingModule { }
