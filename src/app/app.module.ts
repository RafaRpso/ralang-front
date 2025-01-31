import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Importe as rotas
import { ProfileComponent } from '../profile/profile.component';
import { ChallengesComponent } from '../challenges/challenges.component';
import { ShadowingComponent } from '../shadowing/shadowing.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { LessonComponent } from '../shadowing/lesson/lesson.component';
import { LoadingPageComponent } from './utils/loading-page/loading-page.component';
import { MarkdownModule } from 'ngx-markdown'
import { RightNavbarComponent } from './right-navbar/right-navbar.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ChallengesComponent,
    ShadowingComponent,
    RoomsComponent, 
    LessonComponent,
    LoadingPageComponent, 
    RightNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure as rotas
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }