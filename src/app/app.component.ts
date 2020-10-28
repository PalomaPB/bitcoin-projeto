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
    this.update(); //chama o metodo update
  }

  getPalomaGit(){
    return this.github.paloma; //pega e retorna os dados "paloma" do service Github
  }

  getStephanieGit(){
    return this.github.stephanie; //pega e retorna os dados "stephanie" do service Github
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice; //pega e retorna os dados "currentPrice" do bitcoinService
  }

  update(){
    //atualiza os dados do bitcoinservice e do github sempre que chamado
    this.bitcoinService.update();
    this.github.update();
  }
}
