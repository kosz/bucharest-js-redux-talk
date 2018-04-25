import { Component } from '@angular/core';
import { store } from './my-redux'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theValue: any;

  ngOnInit() {
    store.subscribe(val => this.theValue = val.nr);
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }
  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }
}
