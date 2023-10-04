import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    { path:'', component: InicioComponent},
    {path:'login', component: LoginComponent},
    {path:'registrarse', component: RegistroComponent},
    {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
