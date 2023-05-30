import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooButtonComponent } from './foo-button.component';

describe('FooButtonComponent', () => {
  let component: FooButtonComponent;
  let fixture: ComponentFixture<FooButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FooButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
