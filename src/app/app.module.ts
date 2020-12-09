import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ContainerComponent } from './components/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmsComponent } from './components/films/films.component';
import { TvChannelsComponent } from './components/tv-channels/tv-channels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AuthorizationComponent,
    ContainerComponent,
    FilmsComponent,
    TvChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
