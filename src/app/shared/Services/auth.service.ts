import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  result: any;
  docId: any;

  constructor(
    private db : Firestore
  ) { }

  add(param: any) {
    param.id = doc(collection(this.db, 'id')).id
    return addDoc(collection(this.db, 'Users'),param)
  }
}
