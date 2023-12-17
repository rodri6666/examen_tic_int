import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../dexie/db';
import { Versiculo } from '../dexie/versiculos.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  listaVersiculos = liveQuery(() => db.versiculos.toArray());
  versiculos : Versiculo [] =[];
  /** 
   *
   */
  constructor() {
    this.listaVersiculos.subscribe(

      (versiculo)=>{
        this.versiculos=versiculo;
        console.log(versiculo)},

      (error)=>{console.log(error)}
    );
    
  }
}
