import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Mail} from '../Class/Mail';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  mails: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.mails = this.firestore.collection('mails').valueChanges();
  }

  sendMail(mail: Mail): any {
    return this.firestore.collection('mails').add(mail);
  }
  recive(): any{
    return this.mails;
  }


}



