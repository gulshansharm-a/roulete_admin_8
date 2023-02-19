import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import{Database} from '@angular/fire/database'
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent {
  constructor(public db: AngularFireDatabase,public router: Router) {
    db.list('admin').valueChanges().forEach(data=>{
      console.log(data)
    })   
   }
   addDes(value:NgForm['value']) {
    this.db.list('admin' + this).push(value).then(
      snap=>{
        const s = snap.key;
        snap.update({id:s});
      }
    );
    this.router.navigate(['/'])
   }
}
