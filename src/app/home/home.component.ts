import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {BoredcardComponent} from "../boredcard/boredcard.component";
import {ActivityModel} from "../models/activity.model";
import {ImBoredService} from "../service/imbored.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    BoredcardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ImBoredService]
})
export class HomeComponent {
  loading: boolean = true;
  activities : ActivityModel[] = [];
  constructor(public imBoredService: ImBoredService) {

  }
  ngOnInit(): void {
    this.loadCards(20);
  }

  private loadCards(n: number): void{
    this.loading = true;
    let activitiesFromService = this.imBoredService.getRandomActivities(n);
    for(let activityObs of activitiesFromService ){
      activityObs.subscribe((activity => this.activities.push(activity)));
    }
  }

}
