import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPartidaComponent } from './add-edit-partida.component';

describe('AddEditPartidaComponent', () => {
  let component: AddEditPartidaComponent;
  let fixture: ComponentFixture<AddEditPartidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPartidaComponent]
    });
    fixture = TestBed.createComponent(AddEditPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
