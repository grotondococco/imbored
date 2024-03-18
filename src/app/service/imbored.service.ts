import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityModel} from "../models/activity.model";
import {Observable} from "rxjs";
import {ActivityTypeModel} from "../models/activitytype.model";

@Injectable({
  providedIn: 'root'
})
export class ImBoredService {
  activityTypesUrl: string = '../../assets/boredapi/activitytypes.json';
  activityTypes : Map<string,string>;
  constructor(public http: HttpClient) {
    this.activityTypes = new Map<string,string>();
    this.loadTypes().subscribe(types => {
      for ( let type of types ){
        this.activityTypes.set(type.type, type.title);
      }
    });
  }

  public log(msg: any)   { console.log(msg); }

  public getRandomActivities(n: number): Observable<ActivityModel>[]{
    let res =[];
    for(let i=0; i<n; i++){
      res.push(this.http.get<ActivityModel>("http://www.boredapi.com/api/activity/", {responseType:"json"}))
    }
    return res;
  }

  private loadTypes(): Observable<ActivityTypeModel[]>{
    return this.http.get<ActivityTypeModel[]>(this.activityTypesUrl);
  }

  public setActivityType(activity: ActivityModel){
    activity.title = this.activityTypes.get(activity.type);
  }

}
