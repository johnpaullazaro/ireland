import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToWearComponent } from './what-to-wear.component';

describe('WhatToWearComponent', () => {
  let component: WhatToWearComponent;
  let fixture: ComponentFixture<WhatToWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatToWearComponent]
    });
    fixture = TestBed.createComponent(WhatToWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
