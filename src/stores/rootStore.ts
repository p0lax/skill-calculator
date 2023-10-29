import { makeAutoObservable } from 'mobx';
import { CalculatorStore } from './calculator/calculator';

export class RootStore {
  calculator: CalculatorStore;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.calculator = new CalculatorStore();
  }
}

export const rootStore = new RootStore();
