import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RepositoriosComponent } from '../repositorios/repositorios.component';
import { BitcoinComponent } from '../bitcoin/bitcoin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@NgModule({
  imports:      
  [ BrowserModule, 
    CommonModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot ([
    {path: '', component: HomeComponent},
    {path: 'repositorio', component: RepositoriosComponent},
    {path: 'bitcoin', component: BitcoinComponent}
  ])],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BitcoinService, GithubService ]
})
export class AppModule { }