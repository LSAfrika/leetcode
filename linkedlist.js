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
        let previoucounter=0
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

     insertnodeI(value,index){
       
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0){ this.prepend(value)}
        if(index>0){ 
            let insertionnode=new node(value)

            let previousnode=this.head


            for(let i=0;i<index-1;i++){
                previousnode=previousnode.next
            }
       
             insertionnode.next=previousnode.next
             previousnode.next=insertionnode

             this.size++
           //  console.log(`node at index ${index}\n`,'prev node value',previousnode,'\n',insertionnode);
        
        }

     }

     removenodeindex(index){
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0)this.head=this.head.next
        if(index>0){
            let counter=0
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

     removenodevalue(value){
        if(this.head.value==value){
            this.head=this.head.next
        console.log(value, ' removed from head of link list');


        }else{
        let currentnode=this.head

        while(currentnode.next!==null&&currentnode.next.value!==value){
            currentnode=currentnode.next
        }


        if(currentnode.next==null) return console.log(value,' not found in link list');
        let deletenode=currentnode.next

        currentnode.next=deletenode.next


        console.log(value, ' removed from link list');
        }

        this.size--
     }

     removenodeI(index){
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        let viewnode
        if(index==0)this.head=this.head.next
        if(index>0){
        
            let currentnode=this.head
            let deletenode
            

         for(let i=0;i<index-1;i++){
            currentnode=currentnode.next
         }


            deletenode=currentnode.next

            currentnode.next=deletenode.next

            viewnode=deletenode

        }

        console.log('size decrease:',this.size,'removed node: ',viewnode.value);
        this.size--

        

     }
 
     search(value){
        if(this.Size()==0) return console.log('link list is empty');

   
     let alloccurences=[]
     let currentnode=this.head
   for(let i=0;i<this.size;i++){
    if(currentnode.value==value)alloccurences.push(i)
    currentnode=currentnode.next
   }


   if(alloccurences.length>0) return console.log(value,' occurs ',alloccurences.length,' time(s) in linked list');
   console.log(value,' doesnt occur in linklist');
     }
}

// module.exports={LinkedList}

const linklist = new LinkedList()

linklist.Size()
linklist.append(20)
linklist.append(30)
linklist.prepend(10)
linklist.prepend(30)
linklist.prepend(0)
linklist.insertnodeI(5,1)
// linklist.removenodeI(1)
linklist.view()
linklist.search(300)
linklist.removenodevalue(30)