import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test.component';
import { RecruiterNavbarComponent } from '../recnavbar/recnavbar.component';
import { DataService } from '../services/data.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';



describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let service: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RecruiterNavbarComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule,
        HttpModule,
        HttpClientModule,
        ToastModule.forRoot()],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
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
    expect(component.deleteTest).toHaveBeenCalled();
  });

  // it('should delete try to execute', fakeAsync(
  //   inject([
  //     XHRBackend,
  //     DataService
  //   ], (mockBackend: XHRBackend, dataService: DataService) => {

  //     const expectedUrl = 'https://en.wikipedia.org/w/api.php?' +
  //       'action=query&list=search&srsearch=Angular';

  //     mockBackend.connections.subscribe(
  //       (connection: MockConnection) => {
  //         expect(connection.request.method).toBe(RequestMethod.Get);
  //         expect(connection.request.url).toBe(expectedUrl);

  //         connection.mockRespond(new Response(
  //           new ResponseOptions({ body: mockResponse })
  //         ));
  //       });

  //     searchWiki.search('Angular')
  //       .subscribe(res => {
  //         expect(res).toEqual(mockResponse);
  //       });
  //   })
  // ));

  // });

  it('should share test', () => {
    spyOn(component, 'shareTest').and.callThrough();
    component.shareTest(Test, 2);
    expect(component.shareTest).toHaveBeenCalled();
  });

  // it('should share testa nd service', () => {
  //   spyOn(component, 'shareTest').and.callThrough();
  //   component.shareTest(Test, 2);
  //   expect(component.shareTest).toHaveBeenCalled();
  // });
  var Questions = {
    _id: '123',
    question_name: 'Are you wiiling to locate to bangalore',
    answers: ['Yes', 'No'],
    correct_answer: 'Yes',
    question_type: 'general',
    question_category: 'Single'
  }
  // it('should insert question', () => {
  //   component.newQues.question_name=""
  //   component.newQues.question_type=""
  //   component.newQues.question_category="Select category";
  //   component.newQues.answers=["Yes"];
  //   component.newQues.correct_answer="Select correct answer"
  //   spyOn(component, 'insertQuestion').and.callThrough();
  //   component.insertQuestion();
  //   expect(component.insertQuestion).toHaveBeenCalled();
  // });
  // it('should insert general question ', () => {
  //   component.newQues.question_name="Are you wiiling to locate to bangalore"
  //   component.newQues.question_type="general"
  //   component.newQues.question_category="Single";
  //   component.newQues.answers=["Yes", "No"];
  //   component.newQues.correct_answer="Yes"
  //   spyOn(component, 'insertQuestion').and.callThrough();
  //   component.insertQuestion();
  //   expect(component.insertQuestion).toHaveBeenCalled();
  // });
  // it('should insert question', fakeAsync(() => {
  //   spyOn(dataService, 'insertNewQuestion').and.callThrough();
  //   //component.insertQuestion();
  //   dataService.insertNewQuestion(Questions)
  //   expect(dataService.insertNewQuestion).toHaveBeenCalled();
  // }));
  // it('should create test', async() => {
  //   component.skills_input.length=3;
  //   spyOn(component,'createTest').and.callThrough();
  //   component.createTest();
  //   expect(component.createTest).toHaveBeenCalled(); ///check method execution
  // });

  // it('should add answer', () => {
  //   spyOn(component, 'addAnswers').and.callThrough();
  //   component.addAnswers();
  //   expect(component.addAnswers).toHaveBeenCalled();
  // });

  // it('should remove answer', () => {
  //   spyOn(component, 'removeAnswers').and.callThrough();
  //   component.removeAnswers();
  //   expect(component.removeAnswers).toHaveBeenCalled();
  // });

  // it('should add skills', () => {
  //   spyOn(component, 'addSkills').and.callThrough();
  //   component.addSkills();
  //   expect(component.addSkills).toHaveBeenCalled();
  // });

  // it('should remove skills', () => {
  //   spyOn(component, 'removeSkills').and.callThrough();
  //   component.removeSkills();
  //   expect(component.removeSkills).toHaveBeenCalled();
  // });

  it('should log general', () => {
    spyOn(component, 'logGeneralQuestions').and.callThrough();
    component.logGeneralQuestions('');
    expect(component.logGeneralQuestions).toHaveBeenCalled();
  });

  it('should psychomatric question', () => {
    spyOn(component, 'logPsychQuestions').and.callThrough();
    component.logPsychQuestions('');
    expect(component.logPsychQuestions).toHaveBeenCalled();
  });
});

