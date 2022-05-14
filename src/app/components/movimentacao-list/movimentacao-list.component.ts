import {Component, OnInit} from '@angular/core';
import {MovimentacaoService} from 'src/app/services/movimentacao.service';
import {Movimentacao} from "../../model/Movimentacao";
import {CorrentistaService} from "../../services/correntista.service";

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];

  constructor(private movimentacaoService: MovimentacaoService, private correntistaService: CorrentistaService) {
  }

  ngOnInit(): void {
    this.recuperaDadosDaApi();
  }

  recuperaDadosDaApi(): void {
    //nao facam isso em producao que vai dar xabu
    this.movimentacaoService.findAll().subscribe(listaDeMovimentacoes => {
        listaDeMovimentacoes.forEach(movimentacao => {
          this.correntistaService.getCorrentistaById(movimentacao.idCorrentista).subscribe(correntista => {
            if (correntista !== null) {
              if (movimentacao.idCorrentista === correntista.id) {
                movimentacao.correntista = correntista;
              }
            }
          })
        })
        this.movimentacoes = listaDeMovimentacoes;
      },
      error => {
        console.log(error);
      })
  }
}
