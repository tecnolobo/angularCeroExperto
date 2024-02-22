import { Component, OnInit } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componen.html'
})

export class MainPageComponent  {
  
  constructor(
    private dbzService:DbzService
  ){
  }

  get caracters():Caracter[]{
    return [...this.dbzService.chacarters];
  }


  onDeleteCaracter(id:string):void{
    this.dbzService.deleteCaracterbyId(id);
  }


  onNewCaracter(caracter:Caracter){
    this.dbzService.onAddCaracter(caracter);
  }


}