import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWiseComponent } from './country-wise.component';

describe('CountryWiseComponent', () => {
  let component: CountryWiseComponent;
  let fixture: ComponentFixture<CountryWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
