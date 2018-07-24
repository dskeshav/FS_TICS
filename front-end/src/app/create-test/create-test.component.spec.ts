import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTestComponent } from './create-test.component';
import { RecruiterNavbarComponent } from '../recnavbar/recnavbar.component'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { TestComponent } from '../test/test.component';
import 'rxjs/add/observable/of';

describe('CreateTestComponent', () => {
  let component: CreateTestComponent;
  let dataservice: DataService;
  let fixture: ComponentFixture<CreateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTestComponent, RecruiterNavbarComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ToastModule.forRoot()],
      providers: [
        DataService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  var Test = {
    _id: '123456789012345678901234',
    recruiter_id: '101',
    designation: 'developer',
    question_IDs: ['101', '102'],
    skills: ['java', 'spring']
  }
  it('should delete test', () => {
    spyOn(component, 'deleteTest').and.callThrough();
    component.deleteTest(Test);
    expect(component.deleteTest).toHaveBeenCalled()
  });

  it('should share test', () => {
    spyOn(component, 'shareTest').and.callThrough();
    component.shareTest(Test, 0);
    expect(component.shareTest).toHaveBeenCalled();
  });
  it('should insert question with no input', () => {
    component.newQues.question_name="";
    component.newQues.question_type="";
    component.newQues.question_category="Select category";
    component.newQues.answers=null;
    component.newQues.correct_answer == "Select correct answer"
    spyOn(component, 'insertQuestion').and.callThrough();
    component.insertQuestion();
    expect(component.insertQuestion).toHaveBeenCalled();
  });
  it('should insert question with valid input', () => {
    component.newQues.question_name="'Are you wiiling to locate to bangalore";
    component.newQues.question_type="general";
    component.newQues.question_category="Single";
    component.newQues.answers= ['Yes', 'No'];
    component.newQues.correct_answer == "Yes"
    spyOn(component, 'insertQuestion').and.callThrough();
    component.insertQuestion();
    expect(component.insertQuestion).toHaveBeenCalled();
  });
  it('should create test', async () => {
    component.skills_input.length=3;
    component.skills= ['C', 'C++','Java']
    component.newTest={
      _id: '123456789012345678901234',
      recruiter_id: '101',
      designation: 'developer',
      question_IDs: ['101', '102'],
      skills: ['C', 'C++','Java']
    }
    spyOn(component, 'createTest').and.callThrough();
    component.createTest();
    expect(component.createTest).toHaveBeenCalled(); ///check method execution
  });
  it('should add answer', () => {
    //var answer_input=["a", "B"];
    spyOn(component, 'addAnswers').and.callThrough();
    component.addAnswers();
    expect(component.addAnswers).toHaveBeenCalled();
  });
  it('should remove answer', () => {
  	var answer_input=[["a","b"],["A","B"]];
    spyOn(component, 'removeAnswers').and.callThrough();
    component.removeAnswers()
    expect(component.removeAnswers).toHaveBeenCalled();
  });
  it('should add skills', () => {
    var skills_input=["A"];
    spyOn(component, 'addSkills').and.callThrough();
    component.addSkills();
    expect(component.addSkills).toHaveBeenCalled();
  });
  it('should remove skills', () => {
    var skills_input=["A"];
    spyOn(component, 'removeSkills').and.callThrough();
    component.removeSkills();
    expect(component.removeSkills).toHaveBeenCalled();
  });
  it('should log general', () => {
    spyOn(component, 'logGeneralQuestions').and.callThrough();
    component.logGeneralQuestions('');
    expect(component.logGeneralQuestions).toHaveBeenCalled();
  });
  it('should psychomatric question', () => {
    spyOn(component, 'logPsychQuestions').and.callThrough();
    component.logPsychQuestions(1);
    expect(component.logPsychQuestions).toHaveBeenCalled();
  });
});
