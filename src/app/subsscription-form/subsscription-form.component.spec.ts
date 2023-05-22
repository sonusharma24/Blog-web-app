import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsscriptionFormComponent } from './subsscription-form.component';

describe('SubsscriptionFormComponent', () => {
  let component: SubsscriptionFormComponent;
  let fixture: ComponentFixture<SubsscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsscriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
