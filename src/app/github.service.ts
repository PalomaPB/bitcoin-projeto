import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//interface será utilizada para guardar os dados da API
interface Response{
  name: string;
  url: string;
  owner:{
    login: string;
    url: string;
  }
}

//interface que irá armazenar a nome e a url do github
interface Dados{
    name: string;
    url: string;
}

@Injectable()
export class GithubService {
  paloma: Response;
  stephanie: Response;

  purl = "https://api.github.com/users/PalomaPB/repos"; //url da API para pegar o git da Paloma
  surl = "https://api.github.com/users/stephaniecasantos/repos"; // url da API para pegar o git a Stephanie
  
  itemsp = []; //lista de gits da Paloma
  itemss = []; //lista de gits da Stephanie
  //Foi feito separado para que fosse possível separar as tabelas mostradas na tela

  lista = [];

  updateList: Array<Dados> = [];

  constructor(private http: HttpClient) { }

  update(){
    //pega os items da API e insere no array
    this.http.get(this.purl).toPromise().then(data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.itemsp.push(data[key])
        }
      }
    });

    this.http.get(this.surl).toPromise().then(data =>{
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.itemss.push(data[key])
        }
      }
    });
  }
}