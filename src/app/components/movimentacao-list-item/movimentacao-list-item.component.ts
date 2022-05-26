import {Component, Input, OnInit} from '@angular/core';
import {Movimentacao} from "../../model/Movimentacao";

@Component({
  selector: 'app-movimentacao-list-item',
  templateUrl: './movimentacao-list-item.component.html',
  styleUrls: ['./movimentacao-list-item.component.scss']
})
export class MovimentacaoListItemComponent implements OnInit {
  @Input()
  movimentacao!: Movimentacao;

  constructor() { }

  ngOnInit(): void {

  }



}
