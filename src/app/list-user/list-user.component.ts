import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  allUser: User[];
  list: User[];
  inputCategory: string;
  constructor(private route: ActivatedRoute, private data: SharedDataService) { }

  ngOnInit(): void {
    this.allUser= this.data.list;
    this.route.paramMap.subscribe(
      (params)=>
      {
        let category= params.get('category')
        this.list= this.allUser.filter(user=>user.accountCategory === category)}
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
}
