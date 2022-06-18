/*Watch uptill the 18th min and write down the code as per the youtuber does both the pronises and asyn await
Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
Continue watching from the 18th min to 23rd min and understand how to handle Promise.all with async await
Convert the createPost , deletePost you wrote previously into async await completely*/


console.log('person1: shows ticket')
console.log('person2: shows ticket')


const preMovie = async () => 
{
const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {resolve('ticket');},3000)
      });
const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
const getButter = new Promise((resolve,reject) => resolve('butter'));
const getColdDrinks  = new Promise((resolve,reject) => resolve('ColdDrinks'));

   
let ticket = await promiseWifeBringingTicks;
console.log('wife: I have the '+ ticket)
console.log('husband: we should go in')
console.log('wife: no I am hungry')
let popcorn = await getPopcorn;
console.log('husband: I got some '+ popcorn)
console.log('husband: we should go in')
console.log('wife: I need butter in my popcorn')
let butter = await getButter;
console.log('husband: I got some '+butter+ ' on popcorn')
console.log('husband: anyting else')
console.log('wife: cold drinks please')
let cooldrinks = await getColdDrinks
console.log('husband: I have brought ' +cooldrinks)

//Continue watching from the 18th min to 23rd min and understand how to handle Promise.all with async await
const getCake = new Promise((resolve,reject) => resolve('Cake'));
const getCandy = new Promise((resolve,reject) => resolve('Candy'));
const getIceCream = new Promise((resolve,reject) => resolve('IceCream'));
let [Cake,Candy,IceCream] = await Promise.all([getCake,getCandy,getIceCream])
console.log(Cake+Candy+IceCream)
return ticket
}
preMovie().then((m) => console.log(m))

console.log('person3: shows ticket')
console.log('person4: shows ticket')



//Convert the createPost , deletePost you wrote previously into async await completely
posts=[]
function getPosts()
{
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      const date1 = new Date()
      const date2 = new Date(post.createdAt)
      const diff  = Math.abs(date1-date2)
      output += '<li>' + post.title + ' is created ' + new Date(diff).getSeconds() + ' seconds ago' + '</li>'
    });
    output+='<br>'
    document.body.innerHTML=output
  },1000);
}
function createPost(post)
{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(post === null)
      reject('Error: Someting Went wrong')
      else
      {
        posts.push(post);
        resolve();
      }
      
    },2000);
  });
}

function deletePost()
{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(posts.length)
      {
        posts.pop()
        resolve();
      }
      else
      reject('Array is empty now')
    },1000) 
  })
}


async function init()
{
    await createPost({title: 'post 1',body:'something',createdAt: new Date()})
    await createPost({title: 'post 2',body:'something',createdAt: new Date()})
    await createPost({title: 'post 3',body:'something',createdAt: new Date()})
    await createPost({title: 'post 4',body:'something',createdAt: new Date()})
    await createPost({title: 'post 5',body:'something',createdAt: new Date()})
    getPosts();
    await deletePost()
    await deletePost()
    await deletePost()
    getPosts();
    
}

init();