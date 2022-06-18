posts=[{title:'Post One',body:'wews fd',createdAt:new Date() },{title:'Post Two',body:'wews fd', createdAt:new Date()}]
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
    document.body.innerHTML=output
  },1000);
}
function createPost(post,callBack)
{
  setTimeout(() => {
    posts.push(post)
    callBack()
  },5000);
}
function create4thPost(post,callBack)
{
  setTimeout(() => {
    posts.push(post)
    callBack({title:'Post three',body:'wews fd',createdAt:new Date()},getPosts)
  },1000)
}
create4thPost({title:'Post Four',body:'wews fd',createdAt:new Date()},createPost)