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

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: User){
    this.users.push(event);
  }

}
