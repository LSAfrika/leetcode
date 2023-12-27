

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

}

const bst= new BSTree()
console.log('is bst empty? ',bst.isEmpty);

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(17)
console.log('is bst empty? ',bst.isEmpty);
bst.search(25)
bst.search(15)
bst.search(10)
