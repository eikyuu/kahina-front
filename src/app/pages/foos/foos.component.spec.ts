import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoosComponent } from './foos.component';

describe('FoosComponent', () => {
  let component: FoosComponent;
  let fixture: ComponentFixture<FoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FoosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
