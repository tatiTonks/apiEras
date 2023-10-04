import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario';

@Injectable({
    providedIn: 'root'
  })

  export class TaylorUsuarioService {
    url = 'http://localhost:3000/taylor'

    constructor(private http: HttpClient) { }

    getUsuarios():Observable<any>{
        return this.http.get(`${this.url}/obtener-usuarios`)
    }

    getUsuario():Observable<any>{
        return this.http.get(`${this.url}/obtener-usuario`)
    }

    postUsuario(usuario:Usuarios):Observable<any>{
        return this.http.post(`${this.url}/crear-usuario`,usuario)
    }

    // putVestuario():Observable<any>{
    //     return this.http.put(`${this.url}/obtener-vestuario`)
    // }

    // deleteVestuario():Observable<any>{
    //     return this.http.delete(`${this.url}/borrar-vestuario`)
    // }

  }
