import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoNewComponent} from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import {MovimentacaoDeleteComponent} from "./components/movimentacao-delete/movimentacao-delete.component";

const routes: Routes = [
  {path: 'movimentacoes-new', component: MovimentacaoNewComponent},
  {path: 'movimentacoes-delete', component: MovimentacaoDeleteComponent},
  {path: 'movimentacoes', component: MovimentacaoListComponent},
  {path: '', redirectTo: 'movimentacoes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
