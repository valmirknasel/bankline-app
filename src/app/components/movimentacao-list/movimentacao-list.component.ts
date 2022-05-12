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
  }

  recuperaDadosDaApi(): void {
    this.contadorTeste++;
    let ms = this.movimentacaoService.list();

    ms.subscribe(listaDeMovimentacoes => {
        this.movimentacoes = listaDeMovimentacoes;
        console.log('dados da api de movimentacoes: ' + listaDeMovimentacoes);
      },
      error => {
        console.log(error);
      });
    this.vinculaMovimentacaoAoCorrentista();
    console.log('Contador de chamadas: ' + this.contadorTeste);
  }

  private vinculaMovimentacaoAoCorrentista() {
    console.log('entrou no metodo vincula movimentacao');
    this.movimentacoes.forEach(mov => console.log(mov.descricao));
    let v = this.movimentacoes.map(function (mov: Movimentacao): string {
      //TODO descobrir pq está vazio o mapeamento apesar da listar estar preenchida...
      return mov.descricao
    })
    console.log('movimentacao: ' + v);
  }

}
