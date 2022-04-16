import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Oferta } from './shared/oferta.model'
import { API_URL } from './app.api'

import './util/rxjs-extensions'
import { Observable } from 'rxjs/Observable';


@Injectable()

export class OfertasService {

    
    constructor( private http: Http, ) { }

    public getOfertas(): Promise<Oferta[]> {

        return this.http.get(`${API_URL}ofertas?destaque=true`)
            .toPromise()
            .then(( resposta: Response ) => resposta.json())
         
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${API_URL}ofertas?categordia=${categoria}`)
            .toPromise()
            .then(( resposta: Response ) => resposta.json())
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(`${API_URL}ofertas?id=${id}`)
            .toPromise()
            .then(( resposta: Response ) => resposta.json()[0])
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${API_URL}como-usar?id=${id}`)
            .toPromise()
            .then(( resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }
    
    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${API_URL}onde-fica?id=${id}`)
            .toPromise()
            .then(( resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }

    public pesquisaOferttas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${API_URL}ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: Response) => resposta.json())
    }
}