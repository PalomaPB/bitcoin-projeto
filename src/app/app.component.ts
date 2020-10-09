import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public bitcoinService: BitcoinService, public github: GithubService) { }

  ngOnInit() {
    this.update();
  }

  getPalomaGit(){
    return this.github.paloma;
  }

  getStephanieGit(){
    return this.github.stephanie;
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice;
  }

  update(){
    this.bitcoinService.update();
    this.github.update();
  }
}
