import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A17-tailwind';
  arrayNumbers  = [];

}
