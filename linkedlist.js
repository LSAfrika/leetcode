class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{

    constructor(){
        this.head= null 
        this.size=0
    }

    linkedlistempty(){
        return this.size===0
    }

     Size(){
        console.log('size of linkedlist',this.size);
        return this.size
     }


     // ADD TO LIST FROM FRONT
     // TIME COMPLEXITY =CONSTANT TIME= O(1)
     prepend(value){
        const nodevalue =new node(value)
        if(this.linkedlistempty()){
            this.head=nodevalue
        }else{

            nodevalue.next=this.head
            this.head=nodevalue

        }

        this.size++
     }

     //ADD TO LIST FROM BACK
     // TIME COMPLEXITY =LINEAR TIME= O(n)

     append(value){

        const nodevalue=new node(value)
        if(this.linkedlistempty()){
            this.head= nodevalue
        }else{

            let currentnode= this.head
            while(currentnode.next){
                currentnode=currentnode.next

                // console.log(currentnode);
            }

            currentnode.next=nodevalue
        }
        this.size++
     }

     view(){
        if(this.linkedlistempty()) return console.log('linkedlist is empty');

        let currentnode=this.head
        let listvalue=''

        while(currentnode){
            listvalue+=` ${currentnode.value} -->`
            currentnode=currentnode.next
        }

        console.log(listvalue,'null \n',);
     }

     insertnode(value,index){
        let previoucounter=1
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0){ this.prepend(value)}
        if(index>0){ 
            let insertionnode=new node(value)

            let previousnode=this.head

            while(previoucounter!=index-1){
                previousnode=previousnode.next
                previoucounter++

            }
             insertionnode.next=previousnode.next
             previousnode.next=insertionnode

             this.size++
           //  console.log(`node at index ${index}\n`,'prev node value',previousnode,'\n',insertionnode);
        
        }

     }

     removenode(index){
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0)this.head=this.head.next
        if(index>0){
            let counter=1
            let currentnode=this.head
            let previousnode
            

            while(counter<index){

                if(counter==index-1)previousnode=currentnode
                currentnode=currentnode.next
                counter++
            }

            // console.log('previous head remove function',previousnode.value);
            // console.log('current head remove function',currentnode.value);

            previousnode.next=currentnode.next
        }

        console.log('size decrease:',this.size);
        this.size--

        

     }
}

module.exports={LinkedList}