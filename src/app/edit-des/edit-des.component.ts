import { Component } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-edit-des',
  templateUrl: './edit-des.component.html',
  styleUrls: ['./edit-des.component.css']
})
export class EditDesComponent {
  id:string = '';
  array:any[]=[];
constructor(public rout:ActivatedRoute,public db:AngularFireDatabase,public router:Router) {
  this.id = rout.snapshot.params['id'];

  console.log(this.id);
  this.db.list("admin/"+this.id).valueChanges().subscribe(s=>{
    console.log(s)
    this.array = s;
    console.log(this.array)
  })
}

addDes(value:NgForm) {
  set(ref(getDatabase(), 'admin/'+this.id ), value);
  this.router.navigate(['/'])
 }
}
