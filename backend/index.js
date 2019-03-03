const Dragon = require('./dragon.js');

const phil = new Dragon({ birthdate: new Date(), nickname: 'Phil' });
const baloney = new Dragon({ birthdate: new Date(), nickname: 'baloney' });
const gooby = new Dragon();

const loosy = new Dragon({
  traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
});
console.log('loosy', loosy);

console.log('phil', phil);
console.log('baloney', baloney);
console.log('gooby', gooby);
