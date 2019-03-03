const Dragon = require('./dragon.js');

const phil = new Dragon({ birthdate: new Date(), nickname: 'Phil' });
const baloney = new Dragon({ birthdate: new Date(), nickname: 'baloney' });
const gooby = new Dragon()

setTimeout(() => {
  const loosy = new Dragon()
  console.log('loosy', loosy)
}, 3000)

console.log('phil', phil);
console.log('baloney', baloney);
console.log('gooby', gooby)
