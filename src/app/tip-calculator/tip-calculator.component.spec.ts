import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalculatorComponent } from './tip-calculator.component';

describe('TipCalculatorComponent', () => {
  let component: TipCalculatorComponent;
  let fixture: ComponentFixture<TipCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipCalculatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Calculates tip and total value for a single person with default tip percentage
  it('should calculate tip and total value for a single person with default tip percentage', () => {
    const component = new TipCalculatorComponent();
    component.onChange("bill");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
    component.onChange("tip");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
    component.onChange("people");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
    component.onChange("bill");
    expect(component.tipTotal).toBe(component.bill * (component.tip / 100));
    expect(component.totalValue).toBe(component.bill + component.tipTotal);
  });

  it('should calculate tip and total value for a single person with 0 bill', () => {
    const component = new TipCalculatorComponent();
    component.bill = 0;
    component.onChange("bill");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
    component.onChange("tip");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
    component.onChange("people");
    expect(component.tipTotal).toBe(0);
    expect(component.totalValue).toBe(0);
  });


});
