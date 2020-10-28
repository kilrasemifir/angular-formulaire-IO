import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  /**
   * Liste de nos utilisateurs.
   */
  users: User[] = [];
  cats: {nom:string}[] = [];

  catsColumns = [{title:'Nom', selector:'nom'}];
  columns = [
    {title: "Nom:", selector:"nom"},
    {title: "Prenom:", selector:"prenom"},
    {title: "Age:", selector:"age"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: User){
    this.users.push(event);
    event.chats.forEach(cat => this.cats.push({nom:cat}));
    console.log(this.users);
  }

}
