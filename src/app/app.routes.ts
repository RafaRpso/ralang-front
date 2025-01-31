import { Routes } from '@angular/router';
import { ChallengesComponent } from '../challenges/challenges.component';
import { ProfileComponent } from '../profile/profile.component';
import { ShadowingComponent } from '../shadowing/shadowing.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { LessonComponent } from '../shadowing/lesson/lesson.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';

export const routes: Routes = [
    { path: 'challenges', component: ChallengesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'shadowing', component: ShadowingComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'shadowing/class', component: LessonComponent}, 
    {path: 'vocabulary', component: VocabularyComponent}
];
