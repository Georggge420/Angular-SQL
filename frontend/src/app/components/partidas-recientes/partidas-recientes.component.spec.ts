import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasRecientesComponent } from './partidas-recientes.component';

describe('PartidasRecientesComponent', () => {
  let component: PartidasRecientesComponent;
  let fixture: ComponentFixture<PartidasRecientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidasRecientesComponent]
    });
    fixture = TestBed.createComponent(PartidasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
