import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServeComponent } from './serve/serve.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    ServeComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
