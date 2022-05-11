import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import {Movimentacao} from "../../model/Movimentacao";

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }

  listMovimentacoes():void {
    this.movimentacaoService.list().subscribe(data => {
      this.movimentacoes = data;
      console.log(data);
    },
    error => {
      console.log(error);
    })
  }

}
