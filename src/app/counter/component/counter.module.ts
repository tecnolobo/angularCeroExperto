import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.componen';
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}