import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ComponentRoutingModule } from './component-routing-module';
import { DemoFlexyModule } from '../demo-flexy-module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    ChatComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    DemoFlexyModule
  ]
})
export class ComponentModule { }
