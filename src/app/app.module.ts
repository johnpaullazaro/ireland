import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VenueComponent } from './venue/venue.component';
import { HowToGoComponent } from './how-to-go/how-to-go.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EntourageComponent } from './entourage/entourage.component';
import { WhatToWearComponent } from './what-to-wear/what-to-wear.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VenueComponent,
    HowToGoComponent,
    SponsorsComponent,
    EntourageComponent,
    WhatToWearComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
