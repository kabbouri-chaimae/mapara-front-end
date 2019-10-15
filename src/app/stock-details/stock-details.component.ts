import { Stock } from '../stock';
import { Component, OnInit, Input } from '@angular/core';

import { StockListComponent } from '../stock-list/stock-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  id: number;
  stock: Stock;


  constructor(private route: ActivatedRoute,private router: Router,
              private stockService: StockService) { }

  ngOnInit() {
    this.stock = new Stock();

    this.id = this.route.snapshot.params['id'];

    this.stockService.getStock(this.id)
      .subscribe(data => {
        console.log(data)
        this.stock = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['stock-list']);
  }
}
