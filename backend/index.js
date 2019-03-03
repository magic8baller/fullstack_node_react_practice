const Generation = require('./generation');

const generation = new Generation();

console.log('generation', generation);

const goober = generation.newDragon();

console.log('goober', goober);

setTimeout(() => {
  const mumuu = generation.newDragon();
  console.log('mumuu', mumuu);
}, 15000);
