// import { TestBed, inject } from '@angular/core/testing';
// import { HttpModule } from '@angular/http';
// import { DataService } from './data.service';
// import { HttpClientModule } from '@angular/common/http';


// describe('CandidDataService', () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpModule, HttpClientModule],
//             providers: [DataService]
//         });
//     });

//     it('should be created', inject([DataService], (service: DataService) => {
//         expect(service).toBeTruthy();
//     }));

//     it('should get questions', inject([DataService], (service: DataService) => {
//         spyOn(service,'getQuestions')
//         service.getQuestions('general', '');
//         expect(service.getQuestions).toHaveBeenCalled();
//     }));
//     it('should get general category questions', inject([DataService], (service: DataService) => {
//         spyOn(service,'getCategoryQuestions');
//         service.getCategoryQuestions('general');
//         expect(service.getCategoryQuestions).toHaveBeenCalled();
//     }));

//     it('should get psychometrics category questions', inject([DataService], (service: DataService) => {
//         expect(service.getCategoryQuestions('psychometric')).toBeTruthy();
//     }));
//     it('should get quantity category questions', inject([DataService], (service: DataService) => {
//         expect(service.getCategoryQuestions('quantity')).toBeTruthy();
//     }));
//     it('should get Candidates', inject([DataService], (service: DataService) => {
//         expect(service.getCandidates('quantity')).toBeTruthy();
//     }));

//     it('should get candidate data', inject([DataService], (service: DataService) => {
//         expect(service.getCandidateData('quantity')).toBeTruthy();
//     }));
//     var Scores = {
//         _id: '120',
//         candid_id: '1023',
//         candid_name: 'TEK',
//         test_id: '302',
//         score: '5'
//     }
//     it('should submit newscores', inject([DataService], (service: DataService) => {
//         expect(service.submitNewScore(Scores)).toBeTruthy();
//     }));

//     var QuestionDetails =
//         {
//             _id: '101',
//             question_name: 'This question inserted via /insert question API by Test Team?',
//             answers: ['testyes', 'testno'],
//             correct_answer: 'testyes',
//             question_type: 'testsingle',
//             question_category: 'testgeneral'
//         };
//     it('should insert newquestion', inject([DataService], (service: DataService) => {
//         expect(service.insertNewQuestion(QuestionDetails)).toBeTruthy();
//     }));
//     var Test = {
//         _id: 'xyz',
//         recruiter_id: '101',
//         designation: 'developer',
//         question_IDs: ['101', '102'],
//         skills: ['java', 'spring']
//     }
//     it('should create newtest', inject([DataService], (service: DataService) => {
//         expect(service.createNewTest(Test)).toBeTruthy();
//     }));
//     var Submissions = {
//         _id:'12',
//         test_id: '2013',
//         question_id: '320',
//         candid_id: '101',
//         answer_given: 'true',
//         isCorrect: false
//     }
//     it('should submit all answer', inject([DataService], (service: DataService) => {
//         expect(service.submitAllAnswer(Submissions)).toBeTruthy();
//     }));
//     it('should delete question', inject([DataService], (service: DataService) => {
//         expect(service.deleteQues(QuestionDetails)).toBeTruthy();
//     }));
//     it('should delete test', inject([DataService], (service: DataService) => {
//         expect(service.deleteTest(Test)).toBeTruthy();
//     }));
//     it('should get score', inject([DataService], (service: DataService) => {
//         expect(service.getScores('')).toBeTruthy();
//     }));

// });