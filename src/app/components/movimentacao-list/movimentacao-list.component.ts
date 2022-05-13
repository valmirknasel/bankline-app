import {Component, OnInit} from '@angular/core';
import {MovimentacaoService} from 'src/app/services/movimentacao.service';
import {Movimentacao} from "../../model/Movimentacao";
import {CorrentistaService} from "../../services/correntista.service";
import {Correntista} from "../../model/Correntista";

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  contadorTeste: number = 0;
  movimentacoes: Movimentacao[] = [];
  correntistas: Correntista[] = [];

  constructor(private movimentacaoService: MovimentacaoService, private correntistaService: CorrentistaService) {
  }

  ngOnInit(): void {
    this.recuperaDadosDaApi();
    this.recuperaDadosDaApi2()
  }


  recuperaDadosDaApi(): void {

    let ms = this.movimentacaoService.list();
    ms.subscribe(listaDeMovimentacoes => {
        this.movimentacoes = listaDeMovimentacoes;
      },
      error => {
        console.log(error);
      });
  }

  recuperaDadosDaApi2(): Movimentacao[] {
    let movimentacoes: Movimentacao[] = [];
    let ms = this.movimentacaoService.list();
    ms.subscribe(listaDeMovimentacoes => {
        movimentacoes = listaDeMovimentacoes;
      },
      error => {
        console.log(error);
      });
    console.log('listaMovimentacoes: ' + movimentacoes);
    console.log('tamanho listaMovimentacoes: ' + movimentacoes.length);
    return movimentacoes;
  }
}
