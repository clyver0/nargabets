import { betPeriod } from "./betPeriod.js";

const config = {
  initialPool: 20,
  minBet: 5,
  days: 178,
  winProbability: 0.7,
  oddMin: 1.60,
  oddMax: 1.90
};

const simulations = 100000;

let results = [];

for (let i = 0; i < simulations; i++) {
  results.push(betPeriod(config));
}

const sum = results.reduce((a, b) => a + b, 0);
const average = sum / simulations;

console.log("config usada:", config);
console.log("simulações:", simulations);
console.log("média final:", average.toFixed(2));
console.log("máximo:", Math.max(...results).toFixed(2));
console.log("mínimo:", Math.min(...results).toFixed(2));

