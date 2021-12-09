import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
import { CoinInfo } from './../../models/CoinInfo';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  @Input() coins: CoinInfo[] = [];

  favorites: CoinInfo[] = [];

  myCoins: { [key: string]: number } = {
    bitcoin: 2,
    solana: 3,
    chainlink: 100,
  };

  constructor(private sharedData: ShareDataService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.setFavoites();
  }

  setFavoites() {
    this.sharedData.getCoin().subscribe((coinId: string) => {
      this.favorites = this.coins.filter((coin: CoinInfo) => {
        return coin.id === coinId;
      });
      this.favorites.forEach(
        (favorite: CoinInfo) =>
          (favorite.my_currency =
            this.myCoins[favorite.id] * favorite.current_price)
      );
    });
  }
}
