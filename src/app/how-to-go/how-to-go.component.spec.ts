import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGoComponent } from './how-to-go.component';

describe('HowToGoComponent', () => {
  let component: HowToGoComponent;
  let fixture: ComponentFixture<HowToGoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToGoComponent]
    });
    fixture = TestBed.createComponent(HowToGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
