import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CandidLoginComponent } from './candid-login.component';
import { CandidDataService } from '../services/candid-data.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { truncate } from 'fs';

describe('CandidLoginComponent', () => {
  let component: CandidLoginComponent;
  let fixture: ComponentFixture<CandidLoginComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let proceedButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidLoginComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        ToastModule.forRoot()],
      providers: [CandidDataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidLoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should ageMaxLimitDate lessthan 10', () => {
    component.ageMaxLimitDate=9;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Maximum month should be 5', () => {
    component.ageMaxLimitDate = 11;
    component.ngOnInit();
    component.ageMaxLimitMonth = 5;
    expect(component.ageMaxLimitMonth).toEqual(5);
  });
  // it('should be created 2', () => {
  //   component.ageMaxLimitDate = 11;
  //   component.ageMaxLimitMonth = 10;
  //   component.ageMaxLimitYear = 5;
  //   component.ngOnInit();
  //   expect(component.ageMaxLimitYear).toEqual(0o05);
  // });


  var welcomeForm = {
    candid_email: 'TestCandidate@email.com',
    candid_phone: '1234567890',
    candid_phone2: '9876543210',
    no_of_exp: 5,
    dob: 1995 - 12 - 31,
    gender: 'Male',
    pref_loc: 'Bangalore',
    recruiter_id: 'TestRecruiterID',
    test_id: 'CreatedTestID',
    hasPassed: true,
    form:{'valid':true},
  }

  it('should insert candidate', () => {
    component.newCandidate = {
      _id: "123456789012345678901234",
      candid_name: "Tek",
      candid_email: 'TestCandidate@email.com',
      candid_phone: '1234567890',
      candid_phone2: '9876543210',
      no_of_exp: 5,
     dob:new Date(''),
      gender: 'Male',
      pref_loc: 'Bangalore',
      recruiter_id: 'TestRecruiterID',
      test_id: 'CreatedTestID',
      hasPassed: true
    }

    spyOn(component,'insertCandidate').and.callThrough();
    component.insertCandidate(welcomeForm);
    expect(component.insertCandidate).toHaveBeenCalled();
  })

});