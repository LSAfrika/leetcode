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
        return console.log('list size:',this.size);
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
            }

            currentnode.next=nodevalue
        }

        this.size++
     }

     viewlistvalues(){
        if(this.linkedlistempty()) return console.log('linkedlist is empty');

        let currentnode=this.head
        let listvalue=''

        while(currentnode){
            listvalue+=` ${currentnode.value} -->`
            currentnode=currentnode.next
        }

        console.log(listvalue,'null');
     }

     insertnode(value,index){
        if(index<0||index>this.size-1) return console.log('index out of range');
        if(index==0) this.prepend(value)

        let currentnode=this.head
        // console.log('size: ',this.size);
        for (let i = 0; i < this.size-1; i++) {
            // console.log(i,index,index-1);
            if(i==index-1){
                // console.log('node to delete: ',currentnode.value);
                const nodetoinsert= new node(value)
                let nextnode=currentnode.next
                currentnode.next=nodetoinsert
                nodetoinsert.next=nextnode

            }
            currentnode=currentnode.next
        }
        this.size++
     }

     deletenodeatgivenindex(index){
        if(index<0||index>this.size-1) return console.log('index out of range');

        let currentnode=this.head

        if(index==0){
            this.head=currentnode.next
        this.size--

        return
        }

        for (let i = 0; i < this.size-1; i++) {
            // console.log(i,index,index-1);
            if(i==index-1){
                
           
                let nodetodelete=currentnode.next
                currentnode.next=nodetodelete.next
            

            }
            currentnode=currentnode.next
        }
        this.size--

     }

     deletenodewithgivenvalue(value){
        if(this.head.value==value) {this.size--;return this.head=this.head.next}

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

     reverselist(){
        let previousnode=null
        let nextnode=null
        let currentnode=this.head

        while(currentnode){
            //*next node of current node
            nextnode=currentnode.next
             //* seeting the current node pointer o previous node
            currentnode.next=previousnode
             //* set previous node to  current node
            previousnode=currentnode
            //* setting current node to next node
            currentnode=nextnode


        }
        this.head=previousnode
     }

     search(value){
        if(this.linkedlistempty())return console.log('the list is empty');
        if(value==undefined)return console.log('value is missing')
        let currentnode=this.head
        let valuearray=[]
        // console.log('values length',valuearray.length);
        for (let node = 0; node < this.size; node++) {
            // console.log(currentnode.value);
            if(currentnode.value===value) valuearray.push(node)
            currentnode=currentnode.next
        }

        if(valuearray.length>0) return console.log(`${value} found ${valuearray.length} time(s) at index [${valuearray}]`)
        if(valuearray.length==0) return console.log(`${value} is not found within the linked list `)

     }
}

module.exports={LinkedList}