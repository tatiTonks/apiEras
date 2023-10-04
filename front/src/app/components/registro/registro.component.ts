import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Vestuarios} from 'src/app/models/vestuario';
import {TaylorerasService} from 'src/app/services/tayloreras.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    @ViewChild("miElemento") miCuadro!: ElementRef

    formularioRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/

    constructor(private fb: FormBuilder, private _vestuarioService: TaylorerasService){
        this.formularioRegistro = this.fb.group({
            nombre : ['',[Validators.required, Validators.pattern(this.regexAlfabetico)]],
            era:['',[Validators.required, Validators.pattern(this.regexAlfabetico)]],
            imagen:['',[Validators.required, Validators.pattern(this.regexAlfabetico)]],
            surpriseSong:[''],
            designer:['',[Validators.required, Validators.pattern(this.regexAlfabetico)]],

        })
    }

    enviarFormulario(){
        //let manera1 = console.log(this.formularioRegistro.value)

        // const vestuarioFormulario : Vestuarios ={
        //     nombre: this.formularioRegistro.get('nombre')!.value,
        //     era: this.formularioRegistro.get('era')!.value,
        //     imagen: this.formularioRegistro.get('imagen')!.value,
        //     surpriseSong: this.formularioRegistro.get('surpriseSong')!.value,
        //     designer:this.formularioRegistro.get('designer')!.value
        // }
        // console.log(this.enviarFormulario);
        let formularioData : Vestuarios = this.formularioRegistro.value
        this._vestuarioService.postVestuario(formularioData).subscribe(data => {
            alert("creado")
            console.log(data);

        },error => {
            console.log(error)
        }
        )
    }
    cambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

}
