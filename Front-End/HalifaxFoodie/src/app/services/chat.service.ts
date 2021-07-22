import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { map, switchMap } from 'rxjs/operators'
import { Observable, combineLatest, of } from 'rxjs'
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private dataservice: DataService, private afs: AngularFirestore, private router: Router) { }

  get(chatId) {
    return this.afs
      .collection<any>('chats')
      .doc(chatId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      )
  }

  async create() {
    const uid = this.dataservice.userData.userId

    const data = {
      uid,
      createdAt: Date.now(),
      count: 0,
      messages: []
    }

    const docRef = await this.afs.collection('chats').add(data);

    return this.router.navigate(['/main/connect', docRef.id])
  }

  async sendMessage(chatId, content) {
    debugger
    const uid = this.dataservice.userData.userId

    const data = {
      uid,
      createdAt: Date.now(),
      content
    }

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId)

      return ref.update({
        messages: firebase.default.firestore.FieldValue.arrayUnion(data)
      })
    }

  }

  async deleteMessage(chat, msg) {
    const uid = this.dataservice.userData.userId;

    const ref = this.afs.collection('chats').doc(chat.id);
    console.log(chat);
    console.log(msg);
    console.log(uid);
    if (chat.uid === uid || msg.uid === uid) {
      // Allowed to delete
      delete msg.user;
      return ref.update({
        messages: firebase.default.firestore.FieldValue.arrayRemove(msg)
      });
    }
  }

  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        const uids = Array.from(new Set(c.messages.map(v => v.uid)));

        // Firestore User Doc Reads
        // const userDocs = uids.map(u =>
        //   this.afs.doc(`users/${u}`).valueChanges()
        // );

        return uids.length ? combineLatest(uids) : of([]);
      }),
      map(arr => {
        arr.forEach(v => (joinKeys[(<any>v).uid] = v));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });

        return chat;
      })
    );
  }
}
