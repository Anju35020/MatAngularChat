import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  values: any;
  confirm: boolean;
  notesForm: FormGroup;
  storeId: any;

  constructor(
    private service: NoteService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getNotesValues();
    this.initialization();
  }

  initialization() {
    let form = {
      title: ['', Validators.required],
      description: ['', Validators.required]
    }
    this.notesForm = this.fb.group(form);
  }

  getNotesValues() {
    this.service.getNotes().subscribe((res: any) => {
      console.log(res);
      this.values = res
    })
  }

  onDelete(objId: any) {
    this.confirm = confirm('Are sure want to delete this Note ?')
    if (this.confirm == true) {
      this.service.deleteNotes(objId);
      alert('Notes delete Successfully');
    }
  }

  onEdit(objId: any) {
    this.notesForm.patchValue({
      title: objId.title,
      description: objId.description
    })

    this.storeId = objId.id;
  }

  onUpdate(){
    debugger
    if(this.notesForm.valid){
      this.service.updateNotes(this.storeId, this.notesForm.value).then(()=>{
        alert('Notes update succesfully');
      })
    }
  }

}
