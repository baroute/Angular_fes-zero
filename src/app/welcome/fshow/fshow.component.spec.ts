import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FshowComponent } from './fshow.component';

describe('FshowComponent', () => {
  let component: FshowComponent;
  let fixture: ComponentFixture<FshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
