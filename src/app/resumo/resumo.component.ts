import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

  inscricao: any;
  resumo: any;

  //Disponibliza uma instância do http
  constructor(private resumoService: ResumoService) {
  }

  ngOnInit() {
    //Devolve o observable
    this.inscricao = this.resumoService.getResumo()
      .subscribe(dados => this.resumo = dados);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}