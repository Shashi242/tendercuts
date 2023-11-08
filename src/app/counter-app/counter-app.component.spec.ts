import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAppComponent } from './counter-app.component';

describe('CounterAppComponent', () => {
  let component: CounterAppComponent;
  let fixture: ComponentFixture<CounterAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterAppComponent]
    });
    fixture = TestBed.createComponent(CounterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
