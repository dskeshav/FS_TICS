//import {AppShellComponent} from './app-shell.component';
import { QuestionsComponent } from './questions.component';
import { RecruiterNavbarComponent } from '../recnavbar/recnavbar.component';
import {
  async,
  fakeAsync,
  tick,
  TestBed,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
// import {BlogService} from '../services/blog.service';
// import {MarkdownService} from '../services/markdown.service';
// import {BlogRollComponent} from '../blog-roll/blog-roll.component';

import { DataService } from '../services/data.service';
import { DebugElement } from '@angular/core';

//import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import {BlogEntryFormComponent} from '../blog-entry-form/blog-entry-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';



describe('Application Shell', () => {
  let mockBackend: MockBackend;
  let testBed: TestBed;
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsComponent, RecruiterNavbarComponent],
      // declarations: [
      //   //AppShellComponent,
      //   //BlogRollComponent,
      //   //BlogEntryFormComponent
      // ],
      providers: [
        // BlogService,
        // MarkdownService,
        DataService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
      ]
    }).compileComponents();
    testBed = getTestBed();
    mockBackend = testBed.get(MockBackend);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //     dataStub = fixture.debugElement.injector.get(DataService);
  });


  it('Can be created delete question', async(() => {
    let dataService: DataService = getTestBed().get(DataService);
  mockBackend.connections.subscribe((connection: MockConnection) => {
    // is it the correct REST type for an insert? (POST)
    expect(connection.request.method).toBe(RequestMethod.Post);
 
    connection.mockRespond(new Response(new ResponseOptions({status: 201})));
    // testBed.compileComponents().then(() => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        console.log('we subscribed to a mock connection', connection);
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [
              {
                _id: '123456789012345678901234',
                question_name: 'Are you wiiling to locate to bangalore',
                answers: ['Yes', 'No'],
                correct_answer: 'Yes',
                question_type: 'general',
                question_category: 'Single'
              }
            ]
          })));

        let fixture: ComponentFixture<QuestionsComponent> = testBed.createComponent(QuestionsComponent);
        tick();
        let blogRoll = fixture.nativeElement.getElementsByTagName('blog-roll');
        expect(blogRoll).toBeDefined();
      });
  }));

});







// import { inject,
//   tick,
//   TestBed,
//   getTestBed,
//   async,
//   fakeAsync,
//   ComponentFixture } from '@angular/core/testing';
//import { Observable } from 'rxjs/Rx';

//import { RouterTestingModule } from '@angular/router/testing';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
//import { QuestionsComponent } from './questions.component';

//import { RecruiterNavbarComponent } from '../recnavbar/recnavbar.component';
// import { DataService } from '../services/data.service';
// import { DebugElement } from '@angular/core';
//import {DataServiceStub} from '../mocks/data.service.stub';



// describe('QuestionsComponent', () => {
//   let component: QuestionsComponent;
//   let fixture: ComponentFixture<QuestionsComponent>;
//   let debugElement: DebugElement;
//   let dataStub:DataServiceStub;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [QuestionsComponent, RecruiterNavbarComponent],
//       imports: [
//         RouterTestingModule,
//         FormsModule,
//         ReactiveFormsModule,
//         HttpModule,
//         HttpClientModule],
//       providers: [DataService,DataServiceStub]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuestionsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     dataStub = fixture.debugElement.injector.get(DataService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   var Questions = {
//     _id: '123456789012345678901234',
//     question_name: 'Are you wiiling to locate to bangalore',
//     answers: ['Yes', 'No'],
//     correct_answer: 'Yes',
//     question_type: 'general',
//     question_category: 'Single'
//   }
//   it('should delete question', () => {
//     spyOn(component,'deleteQuestion').and.callThrough();
//     component.deleteQuestion(Questions)
//     expect(component.deleteQuestion).toHaveBeenCalled()
//   });

//   it('should delete question and service method should be called',fakeAsync(()=>{
//      const spy = spyOn(dataStub, 'deleteQues').and.returnValue(
//       Observable.of(Questions)   
//     )})

//     //expect(spyOn.call.any()).toBe(true);
//   );

//   it('should get question',()=>{
//     spyOn(component,'getQuestions').and.callThrough();
//     component.getQuestions();
//     expect(component.getQuestions).toHaveBeenCalled();
//   })
//   it('should get question and service method should be called',()=>{
//     spyOn(dataStub,'getQuestions').and.returnValue(
//       Observable.of(Questions[0]))
//   })
//   // it('should insert question', () => {
//   //   component.newQues={
//   //     _id: '123456789012345678901234',
//   //     question_name: 'Are you willing to locate to bangalore',
//   //     answers: ['Yes', 'No'],
//   //     correct_answer: 'Yes',
//   //     question_type: 'general',
//   //     question_category: 'Single'
//   //   }
//   //   spyOn(component,'insertQuestion').and.callThrough();
//   //   component.insertQuestion();
//   //   expect(component.insertQuestion).toHaveBeenCalled();
//   // })

//   // it('should add answer', () => {
//   //   spyOn(component,'addAnswers').and.callThrough();
//   //   component.addAnswers();
//   //   expect(component.addAnswers).toHaveBeenCalled();
//   // })
//   // it('should remove answer', () => {
//   //   spyOn(component,'removeAnswers').and.callThrough();
//   //   component.removeAnswers();
//   //   expect(component.removeAnswers).toHaveBeenCalled();
//   // })
// });