import { Component, Input, OnInit } from '@angular/core';
import { CoinInfo } from './../../models/CoinInfo';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Input() coin!: CoinInfo;

  constructor() {}

  ngOnInit(): void {}
}