import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() addUser = new EventEmitter<User>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [0, Validators.required],
      adresse: this.formBuilder.group({
        numero: [0],
        rue: [''],
        codePostal:['']
      }),
      chats: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  get chats(){
    return this.userForm.get('chats') as FormArray;
  }

  ajouterChat(){
    this.chats.push(this.formBuilder.control(''));
  }

  onSubmit(){
    if (this.userForm.valid){
      this.addUser.emit(this.userForm.value);
      this.userForm.reset(new User());
    }
    else {
      alert("Le formulaire n'est pas valide!")
    }
  }

  ngOnInit(): void {
  }

}
