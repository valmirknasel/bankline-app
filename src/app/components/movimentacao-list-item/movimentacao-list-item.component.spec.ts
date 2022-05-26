import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoListItemComponent } from './movimentacao-list-item.component';

describe('MovimentacaoListItemComponent', () => {
  let component: MovimentacaoListItemComponent;
  let fixture: ComponentFixture<MovimentacaoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
