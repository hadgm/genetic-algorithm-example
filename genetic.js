import {Individual} from 'individual';
import {Population} from 'population';
import {FitnessCalc} from 'fitness-calc';

export class TheLab {

  constructor() {
    this._uniformRate = 0.5;
    this._mutationRate = 0.015;
  }

  evolve (currentPop) {
    var size = currentPop.size();
    var newPop = new Population(size);

    // keep he
    var talent = currentPop.getFitest();
    newPop.add(talent);

    for(let i = 1; i < size; i++) {
      let first = this.select(currentPop);
      let second = this.select(currentPop);
      newPop.add(this.crossover(first, second));
    }

    return newPop;
  }

  select(population) {
    var tournament = new Population();
    var size = population.size();
    var randomID = () => {
      return Math.floor(Math.random() * size);
    };

    for (let i = 0, _size = 5; i < _size; i++) {
      tournament.add(population.take(randomID()));
    }
    return tournament.getFitest();
  }

  crossover(dad, mom) {
    var child = new Individual();
    var genFromDad = () => {return Math.random() >= this._uniformRate;};
    var isMutator = ()=> {return Math.random() <= this._mutationRate;};

    if(isMutator()) {
      console.log('mutant');
      for (let i = 0, genLength = dad.getGenLength(); i < genLength; i++) {
        child.setGen(i, Math.round(Math.random()));
      }

      return child;
    }

    for (let i = 0, genLength = dad.getGenLength(); i < genLength; i++) {
      if (genFromDad()) {
        child.setGen(i, dad.getGen(i));
      } else {
        child.setGen(i, mom.getGen(i));
      }
    }
    return child;
  }

}
