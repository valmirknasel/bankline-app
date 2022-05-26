import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoDeleteComponent } from './movimentacao-delete.component';

describe('MovimentacaoDeleteComponent', () => {
  let component: MovimentacaoDeleteComponent;
  let fixture: ComponentFixture<MovimentacaoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
