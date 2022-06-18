/*Deliverable

Watch uptill the 18th min and write down the code as per the youtuber does both the pronises and asyn await
Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code*/
console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('ticket');
  },3000)
})

promiseWifeBringingTicks.then((t) => {
  console.log('person3: shows ' + t);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
  console.log('husband: we should go in')
  console.log('wife: no I am hungry')
  return new Promise((resolve,reject) => resolve(t+' popcorn'));
});

const getButter = getPopcorn.then((t) => {
  console.log('husband: I got some popcorn')
  console.log('wife: I need butter on my popcorn')
  return new Promise((resolve,reject) => resolve(t +' Butter'));
});

const getColdDrinks = getButter.then((t) => {
  console.log('husband: anything else')
  console.log('wife: I need cooldrinks')
  return new Promise((resolve,reject) => resolve(t +' cooldrinks'));
});

getColdDrinks.then((t) => console.log(t))

console.log('person4: shows ticket')
console.log('person5: shows ticket')