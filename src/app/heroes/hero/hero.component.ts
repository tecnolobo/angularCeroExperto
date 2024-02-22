import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:string   = 'iroman';
  public edad:number= 24;

  get capitalizaName():string{
    return this.nombre.toUpperCase();
  }

  getheroDescription ():string{
    return `${this.nombre}-${this.edad}`;
  }

  changeHeroe():void{
    this.nombre = 'Spiderman';
  }

  changeAge(){
    this.edad = 15;
  }


}
