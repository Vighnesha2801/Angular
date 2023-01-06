import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectparentComponent } from './subjectparent.component';

describe('SubjectparentComponent', () => {
  let component: SubjectparentComponent;
  let fixture: ComponentFixture<SubjectparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
