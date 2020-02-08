import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownhallanswersComponent } from './townhallanswers.component';

describe('TownhallanswersComponent', () => {
  let component: TownhallanswersComponent;
  let fixture: ComponentFixture<TownhallanswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownhallanswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownhallanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
