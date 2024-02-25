import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  // templateUrl: './search-box.component.html',
  template:`
  <h5>Buscar</h5>
  <input type="text" class="form-control"
  placeholder="Buscar gfigss.."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput') //De esta forma le decimos a una variable que va ser de tipo html y ara referencia al input de arriba con el #txtTagInput
  mielemento!:ElementRef<HTMLInputElement>


  constructor(private gifService:GifService){

  }

  searchTag(){
    const valTag= this.mielemento.nativeElement.value;//Aqui extraemosel valor del input que esta dentro del componente html
    this.gifService.searchTag(valTag);
    console.log(valTag);
    this.mielemento.nativeElement.value="";

  }

}
