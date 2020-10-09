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
import { BitcoinService } from '../bitcoin.service';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot ([
    {path: '', component: HomeComponent},
    {path: 'repositorio', component: RepositoriosComponent},
    {path: 'bitcoin', component: BitcoinComponent}
  ])],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService]
})
export class AppModule { }