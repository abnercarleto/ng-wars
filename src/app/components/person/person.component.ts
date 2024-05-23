import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

import { IPerson } from '../../core/models/iperson';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  @Input() person!: IPerson;

  get gridItems(): { label: string, value: any }[] {
    return [
      {
        label: 'Birth year',
        value: this.person.birthYear,
      },
      {
        label: 'Eye color',
        value: this.person.eyeColor,
      },
      {
        label: 'Gender',
        value: this.person.gender,
      },
      {
        label: 'Hair color',
        value: this.person.hairColor,
      },
      {
        label: 'Height',
        value: this.person.height,
      },
      {
        label: 'Mass',
        value: this.person.mass,
      },
      {
        label: 'Skin color',
        value: this.person.skinColor,
      },
    ];
  }
}
