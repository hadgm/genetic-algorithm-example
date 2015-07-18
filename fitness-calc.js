export class FitnessCalc {

  constructor () {
    
  }

  static setSolution(solution) {
    if (typeof solution === 'string') {
      solution = solution.split('').map((c)=> +c); //convert char to number
    }
    this._solution = solution;
  }

  static calc(individual) {
    var fitness = this._solution.reduce((memo, bit, idx)=>{
      memo += individual.getGen(idx) === bit;
      return memo;
    }, 0);
    return fitness / this._solution.length;
  }

}