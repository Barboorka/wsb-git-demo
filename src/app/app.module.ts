import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { OddzialyComponent } from './oddzialy/oddzialy.component';
import { FormularzKontaktowyComponent } from './formularz-kontaktowy/formularz-kontaktowy.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    OddzialyComponent
    FormularzKontaktowyComponent
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
