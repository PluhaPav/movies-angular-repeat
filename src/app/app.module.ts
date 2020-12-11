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
import { ModalAuthorizationComponent } from './components/modal-authorization/modal-authorization.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SingleFilmComponent } from './page/single-film/single-film.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ModalAuthorizationService } from './services/modals/modal-authorization.service';
import { AuthorizationService } from './services/authorization/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AuthorizationComponent,
    ContainerComponent,
    FilmsComponent,
    TvChannelsComponent,
    ModalAuthorizationComponent,
    HomePageComponent,
    SingleFilmComponent,
    NotFoundComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    ModalAuthorizationService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
