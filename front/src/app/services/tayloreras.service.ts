import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vestuarios } from '../models/vestuario';

@Injectable({
  providedIn: 'root'
})
export class TaylorerasService {
    url = 'http://localhost:3000/taylor'

    constructor(private http: HttpClient) { }


    getVestuarios():Observable<any>{
        return this.http.get(`${this.url}/obtener-vestuarios`)
    }

    getVestuario():Observable<any>{
        return this.http.get(`${this.url}/obtener-vestuario`)
    }

    postVestuario(vestuario:Vestuarios):Observable<any>{
        return this.http.post(`${this.url}/crear-vestuario`,vestuario)
    }

    // putVestuario():Observable<any>{
    //     return this.http.put(`${this.url}/obtener-vestuario`)
    // }

    // deleteVestuario():Observable<any>{
    //     return this.http.delete(`${this.url}/borrar-vestuario`)
    // }
}
