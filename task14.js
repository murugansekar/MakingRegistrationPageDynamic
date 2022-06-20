class Node 
{
  constructor(data) 
  {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST 
{
  constructor() 
  {
    this.root = null;
  }

  insert(data) 
  {
    const newNode = new Node(data);
    if (!this.root) 
    {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = side => {
      if (!current[side]) 
      {current[side] = newNode;return this;}
      current = current[side];
    };

    while (true) {
      if (data === current.data) {return this;}
      if (data < current.data) addSide('left');
      else addSide('right');
    };
  };
  search(data) {
    if (!this.root) return undefined;
    let current = this.root,
        found = false;
  
    while (current && !found) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      else found = true;
    };
  
    if (!found) return 'Nothing Found!';
    return current.data;
  };
}



let tree = new BST();
tree.insert(10);
tree.insert(4);
tree.insert(4);
tree.insert(12);
tree.insert(2);
console.log(tree.search(12));
console.log(tree.search(21));