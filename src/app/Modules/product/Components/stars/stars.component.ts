import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent {
  @Input() rating!: number;

  public levelOfRating!: string;
  public allStars!: string[];
  private stars = new Array(5).fill('bi-star');

  public ngOnInit() {
    this.calculateLevel();
    this.allStars = this.fillStars(this.rating);
  }

  public ngOnChanges() {
    this.calculateLevel();
    this.allStars = this.fillStars(this.rating);
  }

  private calculateLevel() {
    if (this.isLowLevel()) {
      this.levelOfRating = 'red';
    } else {
      this.levelOfRating = this.isHighLevel() ? 'green' : 'goldenrod';
    }
  }

  private isLowLevel() {
    return this.rating < 3;
  }

  private isHighLevel() {
    return this.rating >= 4;
  }

  private fillStars(rating: number): string[] {
    this.stars.fill('bi-star');
    const fullStars = Math.trunc(rating);
    this.stars.fill('bi-star-fill', 0, fullStars);

    if (this.hasHalfStar(rating)) {
      this.stars[fullStars] = 'bi-star-half';
    }
    return this.stars;
  }

  private hasHalfStar(rating: number): boolean {
    return rating % 1 > 0;
  }
}
