import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public caracterList:Caracter[]=[
    {
      name:'Trunk',
      power:10
    }
  ];

  //creamos una variable que va a enviar el formulario a otro modulo 
  @Output()
  public indexDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCaracter(index?:string):void{
    console.log('indeidce',index);
    if(!index){
      return;
    }
    this.indexDelete.emit(index);
  }

}
