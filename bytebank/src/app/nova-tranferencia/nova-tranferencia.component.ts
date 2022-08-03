import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent  {

  valor:number;
  destino:number; 


  transferir() {
    console.log('Solicitada nova transferência');
    console.log('valor :', this.valor);
    console.log('destino :',this.destino);
  }

}
