import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { PersonComponent } from '../../components/person/person.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StarWarsService } from '../../core/service/star-wars.service';
import { Resources } from '../../core/models/resources';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PersonComponent,
    MatGridListModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  resources?: Resources;
  public constructor(
    private readonly starWarsService: StarWarsService,
  ) {}

  ngOnInit(): void {
    this.starWarsService.findResources().subscribe({
      next: (value) => this.resources = value,
      error: (error) => console.error(error)
    });
  }

  get isPeopleMenuEnabled(): boolean {
    return this.resources?.people || false;
  }
}
