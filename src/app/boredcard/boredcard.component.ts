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
  @Input() model: ActivityModel | undefined;
}
