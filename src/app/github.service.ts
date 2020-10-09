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
  stephanie: Response;

  purl = "https://api.github.com/users/PalomaPB/repos";
  surl = "https://api.github.com/users/stephaniecasantos/repos";
  
  itemsp = [];
  itemss = [];


  lista = [];

  updateList: Array<Dados> = [];

  constructor(private http: HttpClient) { }

  update(){
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