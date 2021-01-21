import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './autenticacao/login/login.module';
import { LoginRoutingModule } from './autenticacao/login/components/login-rounting.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/components/cadastro-pj-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastrarPfRoutingModule } from './autenticacao/cadastro-pf/cadastro-pf-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioRoutingModule } from './funcionario/components/funcionario-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/components/admin-routing.module';
import { ListagemComponent } from './funcionario/components/listagem/listagem.component';
import { CadastroComponent } from './admin/components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './admin/components/atualizacao/atualizacao.component';
import { AdminComponent } from './admin/components/admin.componentt';
import { ConfirmarDialog } from './admin/components/listagem/listagem.component';
import { LancamentoService } from './shared/services/lancamento.service';
import { HttpUtilService } from './shared/services/http-util.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { FuncionarioService } from './shared/services/funcionario.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PtBrMatPaginatorIntl } from './shared/pt-br-mat-paginator-intl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    LoginModule,
    LoginRoutingModule,
    FuncionarioRoutingModule,
    FuncionarioModule,
    FlexLayoutModule,
    CadastroPfModule,
    CadastrarPfRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmarDialog ]
})
export class AppModule { 
}