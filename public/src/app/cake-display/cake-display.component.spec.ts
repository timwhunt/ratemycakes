import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDisplayComponent } from './cake-display.component';

describe('CakeDisplayComponent', () => {
  let component: CakeDisplayComponent;
  let fixture: ComponentFixture<CakeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
