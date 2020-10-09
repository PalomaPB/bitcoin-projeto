import { Component, OnInit} from '@angular/core';
import { BitcoinService } from '../app/bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  name = "BitCoin$";
  
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice;
  }

  update(){
    this.bitcoinService.update();
  }

}