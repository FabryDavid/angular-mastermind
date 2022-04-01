import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TriedColorComponent} from './tried-color.component';

describe('TriedColorComponent', () => {
  let component: TriedColorComponent;
  let fixture: ComponentFixture<TriedColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriedColorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
