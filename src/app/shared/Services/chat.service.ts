import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  result: any;
  docId: any;

  constructor(
    private db : Firestore
  ) { }

    // Get values
    get():Observable<any>{
      this.result = collection(this.db, 'Users')
      // where condition
      // this.result = query(collection(this.db, 'addNotes'), where("title", "==", "Title1"))
      // orderBy condition
      // this.result = query(collection(this.db, 'addNotes'), orderBy("title", 'asc'))
      return collectionData(this.result, {idField:'id'}) as Observable<any>
      // return collectionData(this.result) as Observable<any>
    }
}
