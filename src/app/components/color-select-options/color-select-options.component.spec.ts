import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorSelectOptionsComponent} from './color-select-options.component';

describe('ColorSelectOptionsComponent', () => {
  let component: ColorSelectOptionsComponent;
  let fixture: ComponentFixture<ColorSelectOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorSelectOptionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
