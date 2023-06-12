import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  notesForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.intiailization();
  }

  intiailization() {
    let form = {
      title: ['', Validators.required],
      description: ['', Validators.required]
    }
    this.notesForm = this.fb.group(form)
  }


  onSubmit() {
    debugger
    if (this.notesForm.valid) {
      this.noteService.addNotes(this.notesForm.value).then((res: any) => {
        if (res) {
          alert('Data Inserted Succesfully');
        }
      })   
    }
    this.notesForm.reset();
  }

}
