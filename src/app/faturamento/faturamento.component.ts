import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento: any;
  inscricao: any;
  erro: any;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.inscricao = this.faturamentoService.getFaturamento()
      .subscribe(dadosAPI => this.faturamento = dadosAPI, erro => this.erro = true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
