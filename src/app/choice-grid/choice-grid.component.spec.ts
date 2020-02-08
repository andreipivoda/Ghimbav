import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceGridComponent } from './choice-grid.component';

describe('ChoiceGridComponent', () => {
  let component: ChoiceGridComponent;
  let fixture: ComponentFixture<ChoiceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
