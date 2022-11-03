import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch:'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculadora2/:num1/:num2', component: CalculadoraComponent },
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent},
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
