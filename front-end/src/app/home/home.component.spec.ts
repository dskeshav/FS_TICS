import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RecruiterNavbarComponent } from '../recnavbar/recnavbar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {DataService} from '../services/data.service';



describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,
        RecruiterNavbarComponent,
        DashboardComponent,
      ],
      imports: [RouterTestingModule,HttpModule,HttpClientModule],
      providers:[DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
  // it('sholud verify session storage',()=>{
  //   console.log('home component'+);

  // })
});
