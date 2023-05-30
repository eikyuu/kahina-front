import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardAnimeComponent } from './list-card-anime.component';

describe('ListCardAnimeComponent', () => {
  let component: ListCardAnimeComponent;
  let fixture: ComponentFixture<ListCardAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListCardAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
