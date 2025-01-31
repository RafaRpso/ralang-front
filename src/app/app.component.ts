import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RightNavbarComponent } from './right-navbar/right-navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RightNavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Raffolingo';
}
