import { Component } from '@angular/core';
import { CoinsService } from './services/coins.service';
import { CoinInfo } from './models/CoinInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Virtual Wallet';
  coins: CoinInfo[] = [];

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.getCoinsData();
    setInterval(this.getCoinsData.bind(this), 20000);
  }
  getCoinsData() {
    this.coinsService.getCoins().subscribe((response: any) => {
      this.coins = response;
    });
  }
}
