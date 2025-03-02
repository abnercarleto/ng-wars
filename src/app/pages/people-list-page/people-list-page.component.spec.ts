import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListPageComponent } from './people-list-page.component';

describe('PeopleListPageComponent', () => {
  let component: PeopleListPageComponent;
  let fixture: ComponentFixture<PeopleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
