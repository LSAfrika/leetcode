class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }

    get isEmpty(){

        console.log('is empty: ',this.root===null);
        return this.root===null
    }
    addnode(value){

        const node= new Node(value)
        if(this.root==null) return this.root=node

        this.addinnernode(this.root,node)
        
    }

    addinnernode(root,node){

        if(root.value>node.value){
            if(root.left==null)return root.left=node
            this.addinnernode(root.left,node)

        }else{

            if(root.right==null)return root.right=node
            this.addinnernode(root.right,node)

        }

    }

    searchvalue(value){

        if(this.root&&this.root.value==value) return console.log(this.root.value,value,'root value');

        this.deepsearch(this.root,value)
    }

    deepsearch(node,value){
        if(node==null) return console.log(false);
        if(node.value==value) return console.log(value,true);

        if(value>node.value)return this.deepsearch(node.right,value)
        if(value<node.value)return this.deepsearch(node.left,value)
    }

    preorder(root){
        if(root==null) return
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }

    inorder(root){
        if(root==null) return
        this.preorder(root.left)
        console.log(root.value);
        this.preorder(root.right)
    }

    postorder(root){
        if(root==null) return
        this.preorder(root.left)
        this.preorder(root.right)
        console.log(root.value);
    }

    breathefirstsearch(root){
        if(root==null) return
        let queue=[root]
        let values=[]
        //console.log(queue);
        while(queue.length){
            let popped=queue.shift()
            
            if(popped)values.push(popped.value)
         if(popped.left)   queue.push(popped.left)
         if(popped.right)   queue.push(popped.right)
            

        }

        console.log(values);
    }

    mintreevalue(){
        if(this.root==null) return
        let leftnode=this.root
        while (leftnode.left) {
          //  console.log(leftnode.value);
            leftnode=leftnode.left
        }

        console.log(leftnode.value);
    }

    maxtreevalue(){
        if(this.root==null) return
        let rightnode=this.root
        while (rightnode.right) {
          //  console.log(rightnode.value);
            rightnode=rightnode.right
        }

        console.log(rightnode.value);
    }
}



const bst= new BST()
bst.isEmpty
bst.addnode(20)
bst.isEmpty
bst.addnode(25)
bst.addnode(15)
bst.addnode(10)
bst.addnode(21)
bst.addnode(22)

bst.searchvalue(10)
bst.searchvalue(15)
console.log('=============preorder===========');

bst.preorder(bst.root)
console.log('=============inorder===========');
bst.inorder(bst.root)
console.log('=============postorder===========');
bst.postorder(bst.root)
console.log('=============breathefirstsearch===========');
bst.breathefirstsearch(bst.root)
console.log('=============min tree value===========');
bst.mintreevalue()
console.log('=============max tree value===========');
bst.maxtreevalue()


