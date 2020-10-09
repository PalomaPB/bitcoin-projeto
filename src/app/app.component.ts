import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.update();
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice;
  }

  update(){
    this.bitcoinService.update();
  }
}
