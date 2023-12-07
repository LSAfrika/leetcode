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
        return console.log('list size',this.size)
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

        console.log('size increase: ',this.size);
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

        console.log('append size increase: ',this.size);
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
        
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0){ this.prepend(value)}
        if(index>0){ 
     

        let currentnode=this.head
    
        for (let i = 0; i < this.size-1; i++) {
          
            if(i==index-1){
            
                const nodetoinsert= new node(value)
                let nextnode=currentnode.next
                currentnode.next=nodetoinsert
                nodetoinsert.next=nextnode
                this.size++

                return
            }
          

            currentnode=currentnode.next
           
        
        }
    



    }
    console.log('size increase insert; ',this.size);
        

     }

     deletenodewithgivenvalue(value){
        // console.log(this.head.value,value);
        if(this.head.value==value) {
            let deletevalue=this.head.value
            this.head=this.head.next
            this.size--; 
            return console.log(`${deletevalue} has been removed from linkedlist`)
        }

        let indexnode=this.head

        while(indexnode.next&&indexnode.next.value!=value){
            indexnode=indexnode.next
        }
        if(indexnode.next !=null){

            let nodetodelete=indexnode.next
            indexnode.next=nodetodelete.next
            this.size--

            return
        }

        console.log(value,' is not in the list');
     }

     deletenodeatgivenindex(index){
        if(index<0||index>this.size)  {console.log('index out of range');return;}
        if(index==0){
            this.head=this.head.next;
            this.size--;
            return
        }

        let currentnode=this.head
        let nextnode=null
        for (let i = 0; i < this.size; i++) {
            
            if(i==index-1){
                
                nextnode=current.next
                currentnode.next=nextnode.next
                return
            }
            currentnode=currentnode.next

        }
        this.size--
     }

     reverselist(){
        let previousnode=null
        let nextnode=null
        let currentnode=this.head
        let reversevaluestring='null  '
       // console.log(reversevaluestring);

        while(currentnode){
            nextnode=currentnode.next
            currentnode.next=previousnode
            previousnode=currentnode
            currentnode=nextnode
            reversevaluestring+='<-- '+previousnode.value+' '
            
        }
this.head=previousnode
console.log(reversevaluestring,'\n',this.size);


        }
     //   this.head=previousnode
     //}

     search(value){
        if(this.linkedlistempty())return console.log('the list is empty');
        if(value==undefined)return console.log('value is missing')
        let currentnode=this.head
        let valuearray=[]
    //    console.log(this.size);/
        for (let node = 0; node < this.size; node++) {
            // console.log(currentnode.value);
            if(currentnode.value===value) valuearray.push(node)
            currentnode=currentnode.next
      
            
        }
     

        if(valuearray.length>0) return console.log(`${value} is found ${valuearray.length} time(S) at index [${valuearray}]`)
        if(valuearray.length==0) return console.log(`${value} is not found within the linked list `)

     }
}

module.exports={LinkedList}