import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute} from "@angular/router";
import {SharedDataService} from "../../services/shared-data.service";
import {CalculService} from "../../services/calcul.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  allUser: User[];
  list: User[];
  inputCategory: string;
  category: any;
  nbrUser: number;
  constructor(private route: ActivatedRoute, private data: SharedDataService,
              private calcul: CalculService) { }

  ngOnInit(): void {
    this.allUser= this.data.list;
    this.route.paramMap.subscribe(
      (params)=>
      {
        this.category= params.get('category')
        this.list= this.allUser.filter(user=>user.accountCategory === this.category)}
    );


  }
  delete(user:User){
    let i = this.list.indexOf(user);
    this.list.splice(i,1);
  }
  getColor(user:User){
    if(user.accountCategory=='Admin')
    return 'red';
    else if(user.accountCategory=='Golden')
      return 'yellow';
    else return 'green'
  }
  countUserByCatgory(){
    this.nbrUser = this.calcul.getBilan(this.allUser, 'accountCategory', this.category)
  }
}
