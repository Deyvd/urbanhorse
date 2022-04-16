import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit( ) {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then( (oferta: Oferta) => { 
        this.oferta = oferta
      })
  }

}
