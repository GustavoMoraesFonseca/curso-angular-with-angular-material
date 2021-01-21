import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogarComponent } from './logar.component';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LogarComponent,
        children: [{ path: '', component: LoginComponent}]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(LoginRoutes)], 
})
export class LoginRoutingModule{
}