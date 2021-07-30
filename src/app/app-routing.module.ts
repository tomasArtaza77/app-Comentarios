import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './components/list-cometarios/list-cometarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [

  {path: '', component: ListComentariosComponent},
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:id', component: AgregarEditarComentarioComponent},
  {path: 'ver', component: VerComentarioComponent},
  
  {path: '**', redirectTo: '',pathMatch: 'full'} // si el path es invalido lo redirecciono al inicio, esta ruta siempre va al final

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
