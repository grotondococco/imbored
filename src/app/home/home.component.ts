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
  providers: [ImBoredService, ActivityModel]
})
export class HomeComponent {
  loading: boolean = true;
  imBoredService : ImBoredService;
  activities = new Array<any>;
  constructor(imBoredService: ImBoredService) {
    this.imBoredService = imBoredService;
  }

  ngOnInit(): void {
    this.loadCard();
  }

  private loadCard(): void{
    this.loading = true;
    this.imBoredService.getRandomActivity()
      .subscribe((res)=> {
        this.activities[0] = res;
      });
  }

}
