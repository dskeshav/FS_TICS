import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterNavbarComponent } from './recnavbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecruiterNavbarComponent', () => {
  let component: RecruiterNavbarComponent;
  let fixture: ComponentFixture<RecruiterNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterNavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should logout from application',()=>{
  //   spyOn(component,'logOut').and.callThrough();
  //   component.logOut()
  //   expect(component.logOut).toHaveBeenCalled();
  // })
});
