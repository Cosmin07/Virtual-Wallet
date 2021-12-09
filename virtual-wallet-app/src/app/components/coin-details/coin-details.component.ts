import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoinsService } from './../../services/coins.service';
import { CoinInfo } from './../../models/CoinInfo';
import { ShareDataService } from './../../services/share-data.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'info',
    'image',
    'name',
    'current_price',
    'symbol',
    'last_updated',
    'favorites',
  ];
  dataSource = new MatTableDataSource<CoinInfo>();

  public favoritesSet = new Set<string>();

  constructor(
    private coinServece: CoinsService,
    private sharedData: ShareDataService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.coinServece.getCoins().subscribe((data: CoinInfo[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public setFavorite(element: CoinInfo): void {
    if (this.favoritesSet.has(element.id)) {
      this.favoritesSet.delete(element.id);
    } else {
      this.favoritesSet.add(element.id);
      this.sharedData.coin$.next(element.id);
    }
  }
}
