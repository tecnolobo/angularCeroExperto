import { Component } from '@angular/core';
@Component({
  selector:'app-counter',
  template:`

  <h3>contador: {{counter}}</h3>
  <button (click)="incrementby(+1)">+1</button>
  <button (click)="incrementby(-1)">-1</button>
  
  `
})
export class CounterComponent{
  public counter:number=10;

  incrementby(incr:number):void{
    this.counter+=incr;
  }
}