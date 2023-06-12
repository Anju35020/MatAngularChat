import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { title } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  result: any;
  docId: any;

  constructor(
    private db: Firestore
  ) { }

  // Add a new record
  addNotes(note: any) {
    console.log(this.db)
    note.id = doc(collection(this.db, 'id')).id
    console.log(note.id);
    return addDoc(collection(this.db, 'addNotes'),note)
  }
  
  // Get values
  getNotes():Observable<any>{
    this.result = collection(this.db, 'addNotes')
    // where condition
    // this.result = query(collection(this.db, 'addNotes'), where("title", "==", "Title1"))
    // orderBy condition
    // this.result = query(collection(this.db, 'addNotes'), orderBy("title", 'asc'))
    return collectionData(this.result, {idField:'id'}) as Observable<any>
    // return collectionData(this.result) as Observable<any>
  }

  //Delete
  deleteNotes(objId:any){
  this.docId = doc(this.db, `addNotes/${objId}`)
  return deleteDoc(this.docId)
  }

  //Update
    updateNotes(objId:any,param:any){
      debugger
      this.docId = doc(this.db, `addNotes/${objId}`)
      console.log(param);
      return updateDoc(this.docId, param)
    }

}
