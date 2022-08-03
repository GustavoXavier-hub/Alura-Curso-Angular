import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent  {

  
  transferir() {
    console.log('Solicitada nova transferência');
  }

}
