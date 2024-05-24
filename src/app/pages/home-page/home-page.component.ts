import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { IPerson } from '../../core/models/iperson';
import { PersonComponent } from '../../components/person/person.component';
import { SwapiClientService } from '../../services/swapi-client.service';
import { IResourceUrlsResult } from '../../services/models/iresource-urls-result';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResourceStoreService } from '../../services/resource-store.service';

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
  public constructor(
    private readonly swapiClientService: SwapiClientService,
    private readonly resourceStoreService: ResourceStoreService,
  ) {}

  ngOnInit(): void {
    this.swapiClientService.getResourceUrls().subscribe({
      next: (data) => {
        this.resourceStoreService.resources = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  get isPeopleMenuEnabled(): boolean {
    return !!this.resourceStoreService.people;
  }

  get peopleUrl(): string {
    return this.resourceStoreService.people!;
  }
}
