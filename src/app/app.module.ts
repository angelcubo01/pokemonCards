import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TablaCartasComponent } from './components/tabla-cartas/tabla-cartas.component';
import { CartaDetalladaComponent } from './components/carta-detallada/carta-detallada.component';
import { CartaComponent } from './components/carta/carta.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TablaCartasComponent,
    CartaDetalladaComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
