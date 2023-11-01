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

     linkedlistsize(){
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
     }

     viewlistvalues(){
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
        if(index<0||index>this.size)  {console.log('remove node index out of range');return;}
        if(index==0)this.head=this.head.next
        if(index>0){
            let counter=0
            let currenthead=this.head
            let previousnode
            

            while(counter<index){

                if(counter==index-1)previousnode=currenthead
                currenthead=currenthead.next
                counter++
            }

            // console.log('previous head remove function',previousnode.value);
            // console.log('current head remove function',currenthead.value);
           // counter=1
            previousnode.next=currenthead.next
        }

        this.size--
        // console.log('size decrease:',this.size);

        

     }

     //SHORT HAND WAY OF REMOVING FOM LIST WHILE REUSING DELETE NODE METHODE

     removenodewithspecificvalue(value){

        if(this.linkedlistempty())return console.log('list is empty');
        let currentnode=this.head
       console.log('current link size: ',this.size);
        for (let i = 0; i < this.size; i++) {

            // console.log('current node value',currentnode.value,i);
            if(currentnode.value==value){

                // console.log(i);
                this.removenode(i);
                return console.log(`${value} removed  from list at index ${i}`);
            } 

            currentnode=currentnode.next 
                 
        }

        console.log(`${value} is not in the linked list`);
     }

     insert(value,index){
        if(index<0||index>this.size) return console.log('index out of range');
        if(index==0) this.prepend(value)
     }

     searchlist(value){

        if(this.linkedlistempty())return console.log('no search done since slist is empty');

        let currentnode=this.head
        let listscounter=0
        let valueindex=[]
     




      
        while (currentnode) {
       
            if(currentnode.value==value) valueindex.push(listscounter)
            currentnode=currentnode.next
            listscounter++
            
        }
     

        if (valueindex.length>0) return console.log(`the value ${value} occurs ${valueindex.length} time(s) at index [${valueindex}]`);
            return console.log(` ${value} is not in any node in the list`);
        
     }
}

module.exports={LinkedList}