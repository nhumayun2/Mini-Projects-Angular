import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGSComponent } from './button-gs.component';

describe('ButtonGSComponent', () => {
  let component: ButtonGSComponent;
  let fixture: ComponentFixture<ButtonGSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
