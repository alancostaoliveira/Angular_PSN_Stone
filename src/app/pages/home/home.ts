import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
