import { Component, Input, OnInit } from '@angular/core';
import { CoinInfo } from './../../models/CoinInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() coins: CoinInfo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
