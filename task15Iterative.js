class Node 
{
  constructor(data = null, left = null, right = null) 
  {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

function preorderIterative(root)
{
  if(root === null)
  return 
  stack=[]
  stack.push(root)
  curr = root
  while(stack.length)
  {
    curr = stack.pop()
    console.log(curr.data)
    if(curr.right)
    stack.push(curr.right)
    if(curr.left)
    stack.push(curr.left)
  }

}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(6)
root.right.left.left = new Node(7)
root.right.left.right = new Node(8)

preorderIterative(root)