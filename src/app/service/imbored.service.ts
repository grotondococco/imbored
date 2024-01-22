import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityModel} from "../models/activity.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImBoredService {

  constructor(public http: HttpClient) { }
  public log(msg: any)   { console.log(msg); }

  public getRandomActivity(): Observable<ActivityModel>{
    return this.http.get<ActivityModel>("http://www.boredapi.com/api/activity/", {responseType:"json"});
  }
}
