import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarios } from './cadastro-usuarios';

describe('CadastroUsuarios', () => {
  let component: CadastroUsuarios;
  let fixture: ComponentFixture<CadastroUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUsuarios],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
