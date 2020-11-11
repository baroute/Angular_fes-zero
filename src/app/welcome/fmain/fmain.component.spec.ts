import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmainComponent } from './fmain.component';

describe('FmainComponent', () => {
  let component: FmainComponent;
  let fixture: ComponentFixture<FmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
