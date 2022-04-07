import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http"
import { Observable } from 'rxjs';
import { UsersModule } from '../models/api-models/users/users.model';
import { PageModel } from '../models/api-models/page.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ) { }
  private baseApiUrl="https://reqres.in/api/users";
  getUsers():Observable<UsersModule[]>
  {
    return this.http.get<UsersModule[]>(this.baseApiUrl)
  }
  // getUsersParametrs():Observable<PageModel[]>
  // {
  //   let params1=new HttpParams().set("page","2") ;
  //   return this.http.get<PageModel[]>("https://reqres.in/api/users",{params:params1})
  // }
}
