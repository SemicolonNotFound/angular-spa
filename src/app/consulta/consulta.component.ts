import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  inscricao: any;
  consultas: any;
  erro: any;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.inscricao = this.consultaService.getConsultas()
      .subscribe(dadosAPI => this.consultas = dadosAPI, erro => this.erro = true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
