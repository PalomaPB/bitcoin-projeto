import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response{
  name: string;
  url: string;
  owner:{
    login: string;
    url: string;
  }
}

interface Dados{
    name: string;
    url: string;
}

@Injectable()
export class GithubService {
  paloma: Response;
  purl = "https://api.github.com/users/PalomaPB/repos";
  items = [];
  lista = [];

  updateList: Array<Dados> = [];

  constructor(private http: HttpClient) { }

  update(){
    this.http.get(this.purl).toPromise().then(data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.items.push(data[ke])
        }
      }
    })
  }
}