import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations:[
    HeroComponent,
    HeroesListComponent
  ],
  exports:[
    HeroComponent,
    HeroesListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}