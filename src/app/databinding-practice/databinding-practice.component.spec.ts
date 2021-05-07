import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingPracticeComponent } from './databinding-practice.component';

describe('DatabindingPracticeComponent', () => {
  let component: DatabindingPracticeComponent;
  let fixture: ComponentFixture<DatabindingPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
