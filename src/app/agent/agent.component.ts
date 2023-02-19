import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
 disId:string=' ';
 url?:string;
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {

  this.disId = ActiveR.snapshot.params['disId'];
  
  firebaseDatabase.list('admin/'+this.disId).valueChanges().forEach(s=>{
    console.log(s);
  })
 }
}
