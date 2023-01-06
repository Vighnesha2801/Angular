import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorchildComponent } from './behaviorchild.component';

describe('BehaviorchildComponent', () => {
  let component: BehaviorchildComponent;
  let fixture: ComponentFixture<BehaviorchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
