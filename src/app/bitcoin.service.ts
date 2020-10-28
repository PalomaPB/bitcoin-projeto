
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//interface que será utilizada para guardar os dados da API
interface Response {
  time: { updated: string; };
  disclaimer: string;
  bpi: { [ key in 'USD' | 'BRL' ]: {
    description: string;
    rate_float: number;
    rate: string;
  } };
}

//interface que será utilizada para guardar os dados do preço
interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
//classe que irá pegar os dados da API e irá armazena-las em váriaveis
  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];

  constructor(private http: HttpClient) { }

  //pega os dados da API
  update(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json').subscribe( data => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          BRL: this.currentPrice.bpi.BRL.rate_float
        });
      });
  }

}