import {FitnessCalc} from 'fitness-calc';

export class Individual {
  constructor(genLength) {
    const defaultGenLength = 64;
    this.genLength = genLength || defaultGenLength;
    this._gen = [];
  }

  getGenLength() {
    return this._gen.length;
  }

  generateGen() {
    for (let i = 0; i< this.genLength; i ++) {
      this._gen.push(Math.round(Math.random()));
    }
  }

  getGen(index) {
    return this._gen[index];
  }

  setGen(index, value) {
    this._gen[index] = value;
  }

  getFitness() {
    if(!this._fitness) {
      this._fitness = FitnessCalc.calc(this);
    }
    return this._fitness;
  }

  toString() {
    return this._gen.join('');
  }
}