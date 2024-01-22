import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {ActivityModel} from "../models/activity.model";

@Component({
  selector: 'app-boredcard',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './boredcard.component.html',
  styleUrl: './boredcard.component.css'
})

export class BoredcardComponent {
  @Input() model!: ActivityModel;
  title: string | undefined;
  accessibility: number | undefined;
  type: string | undefined;
  participants: number | undefined;
  price: number| undefined;
  link: string | undefined;
  key: string | undefined;

  constructor(model: ActivityModel) {
    this.title = model.activity;
    this.accessibility = model.accessibility;
    this.type = model.type;
    this.participants = model.participants;
    this.price = model.price;
    this.link = model.link;
    this.key = model.key;
  }
}
