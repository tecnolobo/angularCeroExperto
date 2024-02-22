import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //creamos una variable que va a enviar el formulario a otro modulo 
  @Output()
  public onNewCarter:EventEmitter<Caracter> = new EventEmitter();

  public caracter:Caracter={
    name:'',
    power:0
  }

  emitCaracter(){
    
    this.onNewCarter.emit(this.caracter); //enviamos el objeto caracter como variable de salida de este modulo

    this.caracter={
      name:'',
      power:0
    };
  }

}
