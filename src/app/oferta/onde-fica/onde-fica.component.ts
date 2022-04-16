import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public comoUsar:string; 
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then( 
        (descricao: string ) => { 
          this.comoUsar = descricao
          console.log(this.comoUsar)
        }
      )
  }

}
