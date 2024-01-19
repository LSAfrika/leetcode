

class Node{

    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BSTree{

    constructor(){
        this.root=null
    }

   get isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)

        if(this.isEmpty==true){

            this.root=node
            console.log(this.root);

        }else{

        
            return this.insertnode(this.root,node)
        }
    }

    insertnode(root,newnode){
        if(root.value>newnode.value){
            if(root.left == null) {
                root.left=newnode
            }else{
                 this.insertnode(root.left,newnode)
            }
        }else{
        if(root.right == null) {
                root.right=newnode
            }else{
                 this.insertnode(root.right,newnode)
            }
        }
    }

    search(value){

        // console.log(this.root?.value,value);
        if(this.root&&this.root.value==value) return console.log(value,' is the root node of the tree');
        this.deepsearch(this.root,value)

    }

    deepsearch(node,value){
        if(node==null) return console.log(value,' is not in tree:',false);
        if(node.value== value) return console.log(value,' is in tree:',true);
        if(node.value>value) return this.deepsearch(node.left,value)
        if(node.value<value) return this.deepsearch(node.right,value)
    }
//  depth first search
//#region
    preordertraversal(root){
        if(root){
            console.log(root.value);
            this.preordertraversal(root.left)
            this.preordertraversal(root.right)
        }

    }

    inordertraversal(root){
        if(root){
            this.inordertraversal(root.left)
            console.log(root.value);
            this.inordertraversal(root.right)
        }

    }

    postordertraversal(root){
        if(root){

          
            this.postordertraversal(root.left)
            this.postordertraversal(root.right)
            console.log(root.value);
        }

    }
//#endregion

//breathe first search
    breathfirstsearch(root){
        let stack=[]
        let treevalues=[]
        stack.push(root)
        while (stack.length>0) {
            let currentnode=stack.shift()
            treevalues.push(currentnode.value)
            if(currentnode.left)stack.push(currentnode.left)
            if(currentnode.right)stack.push(currentnode.right)

            
        }

        console.log(treevalues);
    }

    mintreevalueI(root){
       
        if(root.left){
            
            return this.mintreevalueI(root.left)
        }else{
            console.log(root.value);
        }

    }

   

    mintreevalueII(root){
       
        while(root){
           
          if(root.left==null)break
          root=root.left
        }

        console.log(root.value)
    }


    maxtreevalueI(root){
      
        if(root.right){
           // console.log('current right val: ',root.right);
            return this.maxtreevalueI(root.right)
        }else{
            console.log(root.value);
        }

    }
    maxtreevalueII(root){
       
        while(root){
           
          if(root.right==null)break
          root=root.right
        }

        console.log(root.value)
    }

}

const bst= new BSTree()
console.log('is bst empty? ',bst.isEmpty);

bst.insert(10)
bst.insert(15)
bst.insert(12)
bst.insert(5)
bst.insert(3)
// bst.insert(2)
// bst.insert(4)
bst.insert(7)
bst.insert(16)
console.log('is bst empty? ',bst.isEmpty);
// bst.search(25)
// bst.search(15)
// bst.search(10)
// console.log('=======preorder=======');

// bst.preordertraversal(bst.root)
// console.log('=======inorder=======');
// bst.inordertraversal(bst.root)

// console.log('=======postorder=======');
// bst.postordertraversal(bst.root)
// console.log('=======breath first search=======');
// bst.breathfirstsearch(bst.root)
// console.log('=======min bst I value=======');
// bst.mintreevalueI(bst.root)

// console.log('=======min bst II value=======');
// bst.mintreevalueII(bst.root)

console.log('=======max bst I value=======');
bst.maxtreevalueI(bst.root)
console.log('=======max bst II value=======');
bst.maxtreevalueII(bst.root)