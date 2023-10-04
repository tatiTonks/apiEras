import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TaylorUsuarioService } from 'src/app/services/usuario.service';
import { Router } from "@angular/router";
import{Usuarios} from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPassword') alertPassword!: ElementRef


    usuarioForm: FormGroup;
    regexAlfabetico = /^[A-Za-z ]+$/
    regexPass = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[#%@*]).+$/

    constructor(private fb: FormBuilder, private _TaylorUsuarioService: TaylorUsuarioService, private router: Router) {
        this.usuarioForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            email: ['', [Validators.required]],
            contrasena: ['', [Validators.required, Validators.minLength(5)]], //, Validators.pattern(this.regexPass)
            fec_nac: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {

    }

        registroUsuario() {
            if (this.rectificarPass()) {
                this._TaylorUsuarioService.postUsuario(this.usuarioForm.value).subscribe(respuestaApi => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Creado',
                        iconColor: '#2ce30b'
                    })
                    this.router.navigate(['/register'])
                })
            } else {
                console.log('%c Contraseña invalida!!', 'color: red; font-size:2rem;')
            }
        }

        rectificarPass() {
            let passUsuario = this.usuarioForm.get('contrasena')?.value
            if (passUsuario != this.inputPass2.nativeElement.value) {
                this.alertPassword.nativeElement.classList.remove('d-none')
                return false
            } else {
                this.alertPassword.nativeElement.classList.add('d-none')
                return true
            }
        }
}


