import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayCardComponent } from './birthday-card/birthday-card.component';

@Component({
  selector: 'app-root',
  imports: [BirthdayCardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'birthday-card';
}
