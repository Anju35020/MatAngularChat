import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotesComponent } from './component/add-notes/add-notes.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddNotesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
