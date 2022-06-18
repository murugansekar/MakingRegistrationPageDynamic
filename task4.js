posts=[{title:'Post One',body:'wews fd',createdAt:new Date()},{title:'Post Two',body:'wews fd', createdAt:new Date()}]
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
        updateLastUserActivityTime()
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
    },1000) ///Q2
  })
}

deletePost().then(getPosts)
deletePost().then(getPosts).catch(console.log("Array is Empty now"))//Q3
createPost({title:'Post Four',body:'wews fd',createdAt:new Date()}).then(deletePost)//Q4 & 5



//Promise.all
//Q1
const p1 = Promise.resolve('Hello World');
const p2 = 10;
const p3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'GoodBye'));

//q2
function updateLastUserActivityTime()
{
  return new Promise((resolve) => 
  {
    setTimeout(() => {
      const updateLastUserActivityAt = new Date()
      resolve(updateLastUserActivityAt);
    },1000)
  });
}
const p4 = updateLastUserActivityTime()
Promise.all([p1,p2,p3,p4]).then( values => console.log(values));
const p5 = createPost({title:'Post Five',body:'wews fd',createdAt:new Date()})
createPost({title:'Post six',body:'wews fd',createdAt:new Date()})
Promise.all([p4,p5]).then( (item) => {
  console.log(posts);console.log(item[0]);deletePost().then(console.log(posts))
})

  



