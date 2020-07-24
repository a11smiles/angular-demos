import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ApplicationInsightsService } from './application-insights.service';
import { BasePageComponent } from './base-page/base-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    HomePageComponent,
    BasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title, ApplicationInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
