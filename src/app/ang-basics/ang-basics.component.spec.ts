import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngBasicsComponent } from './ang-basics.component';

describe('AngBasicsComponent', () => {
  let component: AngBasicsComponent;
  let fixture: ComponentFixture<AngBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
