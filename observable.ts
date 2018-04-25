//export function makeObservable() {
//  let observers = new Array();
//  return {
//    observers: observers,
//    nextValue: function(val) {
//      observers.forEach((obs) => obs(val));
//    }
//  } 
//}

export class Observable extends Array<Function> {
  nextValue = val => this.forEach(obs => obs(val));
}
