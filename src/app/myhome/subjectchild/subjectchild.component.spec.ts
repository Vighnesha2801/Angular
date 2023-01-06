import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectchildComponent } from './subjectchild.component';

describe('SubjectchildComponent', () => {
  let component: SubjectchildComponent;
  let fixture: ComponentFixture<SubjectchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
