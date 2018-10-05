import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMiddelComponent } from './login-middel.component';

describe('LoginMiddelComponent', () => {
  let component: LoginMiddelComponent;
  let fixture: ComponentFixture<LoginMiddelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMiddelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMiddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
