import { it, describe, expect } from './testing';
import { Observable } from './observable';

describe('observable', function() {
  
  it('can keep a list of observer functions', () => {
    let observable = new Observable();
    observable.push(function() {});
    expect(observable.length).toEqual(1);
  });

  it('will notify all observers if state changes', () => {
    let observable = new Observable();
    let observerOneSpyValue;
    let observerTwoSpyValue;

    function observerOne(val) {
      observerOneSpyValue = val;
    }
    function observerTwo(val) {
      observerTwoSpyValue = val;
    }

    observable.push(observerOne);
    observable.push(observerTwo);
    observable.nextValue('Hello World');

    expect(observerOneSpyValue).toEqual('Hello World');
    expect(observerTwoSpyValue).toEqual('Hello World');
  });


});
