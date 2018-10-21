import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForLoginComponent } from './home-for-login.component';

describe('HomeForLoginComponent', () => {
  let component: HomeForLoginComponent;
  let fixture: ComponentFixture<HomeForLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
