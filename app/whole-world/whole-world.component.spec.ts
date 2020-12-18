import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeWorldComponent } from './whole-world.component';

describe('WholeWorldComponent', () => {
  let component: WholeWorldComponent;
  let fixture: ComponentFixture<WholeWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
