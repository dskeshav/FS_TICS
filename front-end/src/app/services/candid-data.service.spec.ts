import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CandidDataService } from './candid-data.service';

describe('CandidDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CandidDataService]
    });
  });

  it('should be created', inject([CandidDataService], (service: CandidDataService) => {
    expect(service).toBeTruthy();
  }));
  it('should get candidate', inject([CandidDataService], (service: CandidDataService) => {
    spyOn(service,'getCandidates').and.callThrough();
    service.getCandidates('')
    expect(service.getCandidates).toHaveBeenCalled();
  }))
  var Candidate = {
    _id: '3854',
    candid_name: 'TestCandidateName',
    candid_email: 'TestCandidate@email.com',
    candid_phone: '1234567890',
    candid_phone2: '9876543210',
    no_of_exp: 5,
    dob: new Date(''),
    gender: 'Male',
    pref_loc: 'Bangalore',
    recruiter_id: 'TestRecruiterID',
    test_id: 'CreatedTestID',
    hasPassed: true
  }
  it('should insert new candidate', inject([CandidDataService], (service: CandidDataService) => {
    spyOn(service,'insertNewCandidate')
    service.insertNewCandidate(Candidate);
    expect(service.insertNewCandidate).toHaveBeenCalled();
  }))
});
