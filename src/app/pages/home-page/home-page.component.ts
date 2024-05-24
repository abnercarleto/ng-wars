import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { IPerson } from '../../core/models/iperson';
import { PersonComponent } from '../../components/person/person.component';
import { SwapiService } from '../../services/swapi.service';
import { IResourceUrlsResult } from '../../services/models/iresource-urls-result';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PersonComponent,
    MatGridListModule,
    MatButtonModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {

  private resources?: IResourceUrlsResult;

  public constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getResourceUrls().subscribe({
      next: (data) => {
        this.resources = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  get isPeopleMenuEnabled(): boolean {
    return !!this.resources?.people;
  }

  get peopleUrl(): string {
    return this.resources!.people!;
  }
}
