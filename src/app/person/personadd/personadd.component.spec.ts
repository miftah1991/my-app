import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaddComponent } from './personadd.component';

describe('PersonaddComponent', () => {
  let component: PersonaddComponent;
  let fixture: ComponentFixture<PersonaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
