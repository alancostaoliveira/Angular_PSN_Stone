import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.html',
  styleUrls: ['./card-label.css'],
})
export class CardLabelComponent implements OnInit {
  @Input()
  gameLabel: string = '';

  constructor() {}

  ngOnInit(): void {}
}
