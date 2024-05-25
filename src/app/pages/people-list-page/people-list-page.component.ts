import { Component, OnInit } from '@angular/core';
import { Person } from '../../core/models/person';
import { PersonComponent } from '../../components/person/person.component';
import { CommonModule } from '@angular/common';
import { StarWarsService } from '../../core/service/star-wars.service';

@Component({
  selector: 'app-people-list-page',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list-page.component.html',
  styleUrl: './people-list-page.component.scss',
})
export class PeopleListPageComponent implements OnInit {
  static readonly peopleUrl = 'https://swapi.dev/api/people/';

  people?: Person[];
  prevUrl: string | null = null;
  nextUrl: string | null = null;

  public constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starWarsService.findPeople()
      .subscribe({
      next: (data) => {
        this.prevUrl = data.previousUrl;
        this.nextUrl = data.nextUrl;
        this.people = data.results;
      },
      error: (error) => { console.error(error); }
    });
  }

  isPreviousEnabled(): boolean {
    return !!this.prevUrl;
  }

  isNextEnabled(): boolean {
    return !!this.nextUrl;
  }
}
