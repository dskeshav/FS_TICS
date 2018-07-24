import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecruiterLoginComponent } from './recruiter-login.component';
import { DataService } from '../services/data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

describe('RecruiterLoginComponent', () => {
  let component: RecruiterLoginComponent;
  let fixture: ComponentFixture<RecruiterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterLoginComponent],
      imports: [RouterTestingModule, HttpClientModule, HttpModule],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get question', () => {
  //   spyOn(component, 'login').and.callThrough();
  //   component.login();
  //  expect(component.login).toHaveBeenCalled();
  // });

});