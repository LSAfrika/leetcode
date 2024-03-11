class Nodesingle{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Nodedouble{
    constructor(value){
        this.value=value
        this.next=null
        this.previous=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

     get listsize(){
        return this.size
    }

     get isEmpty(){
        return this.size===0
    }

    prepend(value){

        const node=new Nodesingle(value)
        if(this.isEmpty){
        this.head=node
        }else{
            node.next=this.head
            this.head=node

        }
        this.size++
    }

    append(value){

        const node=new Nodesingle(value)
        if(this.isEmpty){
        this.head=node
        }else{
          let currentnode=this.head

          while (currentnode.next) {
            //   console.log(currentnode);
            currentnode=currentnode.next
            
          }

          currentnode.next=node

        }
        this.size++

    }

    print(){

        let listvalue=''
        let currentnode=this.head
        while (currentnode) {
            listvalue+=currentnode.value+'--> '

            currentnode=currentnode.next
            
        }

        listvalue+=' null'

        console.log(listvalue);

    }

    addatindex(index,value){

        if(index<0||index>this.listsize) return console.log('index out of bounds');
        if(index==0) return  this.prepend(value)
      
            let newnode=new Nodesingle(value)
            let currentnode=this.head
          for (let i = 0; i < index-1; i++) {
            currentnode=currentnode.next
            
          }

          let nextnode=currentnode.next

          currentnode.next=newnode
          newnode.next=nextnode


        
        this.size++

    }

    removeatindex(index){
        if(index<0||index>this.listsize) return console.log('index out of bounds');
        if(index==0){
            this.head=this.head.next
        }else{

            let currentnode=this.head
            for(let i=0;i<index-1;i++){
            currentnode=currentnode.next
            }
            let deletenode=currentnode.next
            let nextnode=deletenode.next
            currentnode.next=nextnode
        }

        this.size--


    }

    revrselist(){

        let currentnode=this.head
        let nextnode=null
        let previousnode=null

        while(currentnode){
            nextnode=currentnode.next
            currentnode.next=previousnode
            previousnode=currentnode
            currentnode=nextnode

        }

        this.head=previousnode

    }


removevalue(value){
    if(value ==this.head.value){
        this.head=this.head.next
        this.size--

    }else{
        let currentnode=this.head

        while (currentnode.next&&currentnode.next.value!=value) {
            currentnode=currentnode.next
            
        }

        if(currentnode.next==null) return console.log('value not in list');
       
        let deletenode =currentnode.next
        let nextnode=deletenode.next
        currentnode.next=nextnode
        this.size--
    }
}



}

const llist= new linkedlist()

console.log('list empty: ',llist.isEmpty)

llist.prepend(30)
llist.prepend(20)
llist.prepend(10)

llist.print()
console.log('list empty: ',llist.isEmpty)
llist.append(40)
llist.append(50)
llist.append(60)

llist.print()
llist.revrselist()
llist.print()

llist.addatindex(0,70)
llist.print()
llist.addatindex(2,55)
llist.print()
llist.revrselist()
llist.addatindex(8,80)
llist.print()

llist.removeatindex(5)
llist.removevalue(70)

llist.print()


