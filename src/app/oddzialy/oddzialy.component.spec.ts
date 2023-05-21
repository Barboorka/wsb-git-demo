import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddzialyComponent } from './oddzialy.component';

describe('OddzialyComponent', () => {
  let component: OddzialyComponent;
  let fixture: ComponentFixture<OddzialyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddzialyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddzialyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
