import { bootstrap } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { routing, appRoutingProviders} from './app/app.routing';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    HTTP_PROVIDERS,
    appRoutingProviders,
  ],
  declarations: [
    AppComponent,
    // ArrivalComponent,
    // HomeComponent,
    // EncountersComponent,
    // ReportComponent


  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule{}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
