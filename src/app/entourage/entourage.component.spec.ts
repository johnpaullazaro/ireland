import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntourageComponent } from './entourage.component';

describe('EntourageComponent', () => {
  let component: EntourageComponent;
  let fixture: ComponentFixture<EntourageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntourageComponent]
    });
    fixture = TestBed.createComponent(EntourageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
