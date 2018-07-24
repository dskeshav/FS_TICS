import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InstructionsComponent } from './instructions.component';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'


describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  var checkbox: any;
  var startButton: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionsComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    checkbox = <HTMLInputElement>document.getElementById("agreeCheckbox");
    startButton = <HTMLInputElement>document.getElementById("startButton")
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('checkbox should not be checked', () => {
    expect(checkbox.checked).toBeFalsy();
  });

  it('check start button is disabled', () => {
    expect(checkbox.checked).toBeFalsy();
    expect(startButton.disabled).toBeTruthy();
  });

  it('check start button gets enabled after check box is checked', () => {
    expect(checkbox.checked).toBeFalsy();
    expect(startButton.disabled).toBeTruthy();

    checkbox.click();
    fixture.detectChanges();

    expect(checkbox.checked).toBeTruthy();
    expect(startButton.disabled).toBeFalsy();
  });
  it('should start test',()=>{
    spyOn(component,'startTest').and.callThrough()
    component.startTest();
    expect(component.startTest).toBeTruthy();
  })
});
