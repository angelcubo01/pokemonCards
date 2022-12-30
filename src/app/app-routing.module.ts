import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CartaDetalladaComponent} from "./components/carta-detallada/carta-detallada.component";
import {TablaCartasComponent} from "./components/tabla-cartas/tabla-cartas.component";

const routes: Routes = [{path: 'home', pathMatch: 'full', component:TablaCartasComponent},
  {path: 'detalle/:id', component: CartaDetalladaComponent },
  {path: '', component:TablaCartasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
