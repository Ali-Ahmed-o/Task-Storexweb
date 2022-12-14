import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeemorePipe } from './seemore.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviesHeaderComponent } from './movies-header/movies-header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TvHeaderComponent } from './tv-header/tv-header.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    SeemorePipe,
    MoviesHeaderComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    SearchResultsComponent,
    TvHeaderComponent,
    ArtistDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
