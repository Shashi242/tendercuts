import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderCutsComponent } from './tender-cuts.component';

describe('TenderCutsComponent', () => {
  let component: TenderCutsComponent;
  let fixture: ComponentFixture<TenderCutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderCutsComponent]
    });
    fixture = TestBed.createComponent(TenderCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
