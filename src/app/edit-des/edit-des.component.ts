import { Component } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { getDatabase, ref, set, update } from "firebase/database";

@Component({
  selector: 'app-edit-des',
  templateUrl: './edit-des.component.html',
  styleUrls: ['./edit-des.component.css']
})
export class EditDesComponent {
  id_url:string = '';
  array:any[]=[];
constructor(public rout:ActivatedRoute,public db:AngularFireDatabase,public router:Router) {
  this.id_url = rout.snapshot.params['id'];
  console.log(this.id_url);
  this.db.list("admin/"+this.id_url).valueChanges().subscribe(s=>{
    console.log(s)
    this.array = s;
    console.log(this.array)
  })
}
addDes(value:NgForm['value']) {

  value['id'] = this.id_url
  const fRef =ref(getDatabase(), 'admin/'+this.id_url );
  set(fRef, value);
 }
 
}
