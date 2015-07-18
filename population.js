import {Individual} from 'individual';

export class Population {

  constructor(size, iamGod) {
    this._individuals = [];

    if(iamGod) {
      for(let i = 0; i < size; i++) {
        let baby = new Individual();
        baby.generateGen();
        this._individuals.push(baby);
      }
    }
  }

  size() {
    return this._individuals.length;
  }

  add(individual) {
    this._individuals.push(individual);
  }

  take(index) {
    return this._individuals[index];
  }

  getFitest() {
    return this._individuals.reduce((previous, current, index)=>{
      if(!current) {
        console.log(this);
      }
      if(previous && previous.getFitness() < current.getFitness()) {
        return current;
      }
      return previous;
    });
  }
}