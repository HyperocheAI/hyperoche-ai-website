import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  barHeights = [40, 65, 50, 80, 55, 90, 70, 85, 60, 75, 95, 50];
}
