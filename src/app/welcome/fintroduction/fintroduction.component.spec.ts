import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FintroductionComponent } from './fintroduction.component';

describe('FintroductionComponent', () => {
  let component: FintroductionComponent;
  let fixture: ComponentFixture<FintroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FintroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
