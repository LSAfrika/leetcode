class Node{
    constructor(value){this.next=null,this.previous=null, this.value=value  }
}

class Doublylinklist{
    constructor(){ this.head=null,this.tail=null,this.size=0 }

    isEmpty(){
        return this.size==0
    }
    listsize(){
        return this.size
    }

    append(value){
        const newnode = new Node(value)

        if(this.isEmpty()){
            this.head=this.tail=newnode
        }else{
          
            newnode.previous=this.tail
            this.tail.next=newnode
            this.tail=newnode

        }
        this.size++


    }
    prepend(value){

        const newnode = new Node(value)

        if(this.isEmpty()){
            this.head=this.tail=newnode
        }else{
          
            newnode.next=this.head
            this.head.previous=newnode
           
            this.head=newnode

        }
        this.size++

    }
    print(){
        if(this.isEmpty())return console.log('doubly link list is empty');

       let currentnode=this.head
       let nodevalues='null'

       while (currentnode) {

        nodevalues+=` <--> ${currentnode.value}`
        currentnode=currentnode.next
        
       }
nodevalues+=' <--> null'

return console.log(nodevalues);


    }
}

module.exports={Doublylinklist}