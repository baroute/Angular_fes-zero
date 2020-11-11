import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FshopComponent } from './fshop.component';

describe('FshopComponent', () => {
  let component: FshopComponent;
  let fixture: ComponentFixture<FshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
