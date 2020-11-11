import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcontentsComponent } from './fcontents.component';

describe('FcontentsComponent', () => {
  let component: FcontentsComponent;
  let fixture: ComponentFixture<FcontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
