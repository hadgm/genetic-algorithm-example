import {Individual} from 'individual';
import {Population} from 'population';
import {FitnessCalc} from 'fitness-calc';
import {TheLab} from 'genetic';

var solution = [];
for (let i = 0; i<64; i++) {
  solution.push(0);
}
FitnessCalc.setSolution(solution);
var pop = new Population(50, true);
var lab = new TheLab();

var counter = 0;
var maxFitness = 0.96;
var fitness = pop.getFitest().getFitness();
console.log(fitness);
while(fitness < maxFitness) {
  fitness = pop.getFitest().getFitness();
  pop = lab.evolve(pop);
}
console.log(counter);
console.log('Super hero: ', pop.getFitest());


window.Individual = Individual;
window.Population = Population;
window.FitnessCalc = FitnessCalc;
window.lab = lab;
window.pop = pop;