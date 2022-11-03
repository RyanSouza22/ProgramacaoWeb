import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    CalculadoraComponent,
    CalcularMediaComponent,
    PageNotFoundComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
