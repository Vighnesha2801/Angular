import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaveComponent } from './behave.component';

describe('BehaveComponent', () => {
  let component: BehaveComponent;
  let fixture: ComponentFixture<BehaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
