import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public deleteHeroe?:string;
  public heroeNAme:string[] =[
    'Spaiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor'
  ];

  removeHeroe():void{
    this.deleteHeroe =this.heroeNAme.pop();
 
  } 

}
