import { Component, ElementRef, ViewChild, OnInit  } from '@angular/core';
import { Vestuarios } from "src/app/models/vestuario";
import {TaylorerasService} from "src/app/services/tayloreras.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    listaVestuarios: Vestuarios [] = [];

    constructor(private _TaylorerasService: TaylorerasService) {

    }
        ngOnInit(): void {
            this.obtenerVestuarios()
        }

        obtenerVestuarios(){
            this._TaylorerasService.getVestuario().subscribe(data => {
                this.listaVestuarios = data
                console.log('data')
            }, error => {
                console.log('error')
            })
        }
    }

