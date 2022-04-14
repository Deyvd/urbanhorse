import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor( private ofertasService: OfertasService ) { }

  ngOnInit() { 

    this.ofertasService.getOfertas()
      .then(( ofertas: Oferta[] ) =>{
        this.ofertas = ofertas
      })
      .catch((e: any) => console.log(e))
   
  }

}
