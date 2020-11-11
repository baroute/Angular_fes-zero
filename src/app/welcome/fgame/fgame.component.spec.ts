import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgameComponent } from './fgame.component';

describe('FgameComponent', () => {
  let component: FgameComponent;
  let fixture: ComponentFixture<FgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
