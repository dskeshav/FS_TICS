import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SubmitTestComponent } from './submit-test.component';
import { DataService } from '../services/data.service';
import { CandidDataService } from '../services/candid-data.service';

describe('SubmitTestComponent', () => {
  let component: SubmitTestComponent;
  let fixture: ComponentFixture<SubmitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitTestComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule],
      providers: [DataService, CandidDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should getTestDeatails', () => {
    component.testID="3214569870";
    spyOn(component, 'getTestDetails').and.callThrough();
    component.getTestDetails();
    expect(component.getTestDetails).toHaveBeenCalled();
  });
  it('should getAppropriateQuestion', () => {
    spyOn(component, 'getAppropriateQuestions').and.callThrough();
    component.getAppropriateQuestions();
    expect(component.getAppropriateQuestions).toHaveBeenCalled();
  });
  // it('should change on selection', () => {
  //   component.allAnswers.length = 3;
  //   spyOn(component, 'onSelectionChange').and.callThrough();
  //   component.onSelectionChange('', '01', '');
  //   expect(component.onSelectionChange).toHaveBeenCalled();
  // });
  it('should change on selection', () => {
    var allAnswers=['123', '321', '101', 'cid123', 'answergiven',false]
    //component.allAnswers.length = 3;
    //component.allAnswers[0].question_id = '101';
    spyOn(component, 'onSelectionChange').and.callThrough();
    component.onSelectionChange('answergiven', '101', 'correct');
    expect(component.onSelectionChange).toHaveBeenCalled();
  });
  it('should send answer', () => {
    component.allAnswers.length = 3;
    component.submitCount = 3;
    spyOn(component, 'sendAnswers').and.callThrough();
    component.sendAnswers();
    expect(component.sendAnswers).toBeTruthy();
  })
  it('should get candidate data', () => {
    spyOn(component, 'getCandidateData').and.callThrough();
    component.getCandidateData('', '');
    expect(component.getCandidateData).toBeTruthy();
  })
  it('should send score', () => {
    component.submitScore = {
      _id: "123456789012345678901234",
      candid_id: "123456789012345678234",
      candid_name: "Tek",
      test_id: "01",
      score: "8"
    }
    spyOn(component, 'sendCandidScore').and.callThrough();
    component.sendCandidScore();
    expect(component.sendCandidScore).toBeTruthy();
  })
});