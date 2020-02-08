import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatedComponent } from './educated.component';

describe('EducatedComponent', () => {
  let component: EducatedComponent;
  let fixture: ComponentFixture<EducatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
