import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {SharedDataService} from "../../services/shared-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
  user: User;
  constructor(private data:SharedDataService, private router: Router) { }
  ngOnInit(): void {
    this.user =  new User();

  }
  save(){
    //traitement
    this.user.accountCategory='Customer';
    this.data.list.push(this.user)
    this.router.navigate(['/user'])
  }

}
