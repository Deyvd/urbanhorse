import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    
    

      this.route.parent.params.subscribe((params: Params) => {
        this.ofertasService.getOndeFicaOfertaPorId(params.id)
          .then( 
            (descricao: string ) => { 
              this.comoUsar = descricao
            }
          )
      })
  }

}
