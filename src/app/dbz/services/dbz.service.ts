import { Injectable } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interfaces';
import {v4 as uuid} from 'uuid';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbzService {
  
  public chacarters:Caracter[]=[
    {
      id:uuid(),
      name:'crilin',
      power:1000
    },
    {
      id:uuid(),
      name:'goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Vegefa',
      power:7500
    }
  ];


  onAddCaracter(caracter:Caracter):void{
    const newCaracter:Caracter = {
      id:uuid(),
      ...caracter
    }
    this.chacarters.unshift(newCaracter);
  }

  deleteCaracterbyId(index:string):void{
    // this.chacarters.splice(index,1);
    this.chacarters = this.chacarters.filter(dato=>dato.id!==index);
    
  }

  
}