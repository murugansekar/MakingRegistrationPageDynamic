class Node 
{
  constructor(data = null, left = null, right = null) 
  {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

function preorder(root)
{
  if(root === null)
  return 1
console.log(root.data)
preorder(root.left)
preorder(root.right)
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(6)
root.right.left.left = new Node(7)
root.right.left.right = new Node(8)

preorder(root)