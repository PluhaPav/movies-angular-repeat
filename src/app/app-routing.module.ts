import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/home-page/home-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { SingleFilmComponent } from './page/single-film/single-film.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'film/:id', component: SingleFilmComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
