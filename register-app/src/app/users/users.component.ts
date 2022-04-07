import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersModule } from '../models/ui-models/users/users.model';
import { UsersService } from './users.service';
import { PageModel } from "../models/api-models/page.models"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UsersModule[]=[];
  page:PageModel[]=[];
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'avatar'];
  dataSource:MatTableDataSource<UsersModule>=new MatTableDataSource<UsersModule>()
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    
    this.usersService.getUsers().subscribe(
      (sucsses)=>{
        this.users=sucsses;
        this.dataSource=new MatTableDataSource<UsersModule>(this.users)
        console.log(this.users)
      },
      (error)=>{

      }
    )
    // this.usersService.getUsersParametrs().subscribe(
    //   (sucsses)=>{
    //   this.page=sucsses
    //   },
    //   (error)=>{

    //   }
    // )
  }

}
