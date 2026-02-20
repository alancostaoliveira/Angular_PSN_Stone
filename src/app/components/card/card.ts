import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label';
import { CardPricingComponent } from './card-pricing/card-pricing';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [CardLabelComponent, CardPricingComponent],
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType: string = 'XPTO | PS4';
  @Input()
  gamePrice: string = 'R$ 399,90';

  constructor() {}

  ngOnInit(): void {}
}
