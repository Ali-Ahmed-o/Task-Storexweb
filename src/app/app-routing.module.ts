import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AuthGuard } from './auth.guard';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  { path: `home`, canActivate: [AuthGuard], component: HomeComponent },
  { path: `movies`, canActivate: [AuthGuard], component: MoviesComponent },
  { path: `tv`, canActivate: [AuthGuard], component: TvComponent },
  { path: `people`, canActivate: [AuthGuard], component: PeopleComponent },
  { path: `notfound`, canActivate: [AuthGuard], component: NotfoundComponent },
  {
    path: `moviedetails/:id`,
    canActivate: [AuthGuard],
    component: MovieDetailsComponent,
  },
  {
    path: `tvdetalis/:id`,
    canActivate: [AuthGuard],
    component: TvDetailsComponent,
  },
  {
    path: `artistDetails/:id`,
    canActivate: [AuthGuard],
    component: ArtistDetailsComponent,
  },
  { path: `register`, component: RegisterComponent },
  { path: `login`, component: LoginComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
  
  RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {} 
 