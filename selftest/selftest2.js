/**
 * recreated doubly link list and quick sort array
 */


function sortarray(nums){
    if(nums.length<2)return nums
    let pivot=nums[nums.length-1]
    let left=[]
    let right=[]
    for ( num of nums) {
// console.log(num);
        if(num>pivot){right.push(num)}
        if(num<pivot) {left.push(num)}
        
    }

    return [...sortarray(left),pivot,...sortarray(right)]
}

console.log(sortarray([7,5,600,4,3,2,10]))


class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.previous=null
    }
}

class linklist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    get isEmpty(){
        return this.size===0
    }

    get getsize(){
        return this.size
    }

    append(value){
        const node= new Node(value)
        if(this.isEmpty==true){
            this.head=node
            this.tail=node
        }else{
            node.previous=this.tail
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    preppend(value){
        const node= new Node(value)
        if(this.isEmpty==true){
            this.head=node
            this.tail=node
        }else{
           this.head.previous=node
           node.next=this.head
           this.head=node
        }
        this.size++
    }

    deletevalue(value){
        if(this.isEmpty==true) return console.log('linkedlist is empty');

        if(this.head.value==value) 
        {
            this.head=this.head.next
         this.head.previous=null
            this.size--
            return

        }
        else  if(this.tail.value==value)
        {
            this.tail=this.tail.previous
            
            this.tail.next=null
          //  console.log(this.tail)
            this.size--
            return

        }else{
            let currentnode=this.head
            while(currentnode.next&&currentnode.next.value!==value){

                currentnode=currentnode.next
            }

            if(currentnode.next==null)return console.log(value, ' not in linklist');

            let deletenode=currentnode.next
            let connectnode=deletenode.next
            currentnode.next=connectnode
            connectnode.previous=currentnode
           // console.log(currentnode.next.value,connectnode.previous.value);
            this.size--
        }

        
    }


    get print(){
        if(this.isEmpty==true) return console.log('linkedlist is empty');
        let listvalue='null <--> '
        let currentnode=this.head

        while (currentnode) {
            listvalue+=`${currentnode.value} <--> `
            currentnode=currentnode.next
            
        }

        listvalue+=' null'
        console.log(listvalue);
    }

    valueatindex(index){
        if(this.isEmpty==true) return console.log('linked list is empty');

        if(index<0||index>this.getsize) return console.log(index,' is out of range');
        if(index==0) return console.log('value at ',index,' is ',this.head.value);
        counter=0
        let currentnode=this.head
        while (currentnode) {
            counter++
            if(counter==index) return console.log('value at ',index,' is ',currentnode.value);
            currentnode=currentnode.next
            
        }
       
    }

    searchvalue(value){
    
        if(this.isEmpty==true) return console.log('linked list is empty');

        let values=[]
        let currentnode=this.head
        while (currentnode) {
      //   console.log(currentnode.value)
            if(currentnode.value==value) values.push(currentnode.value);
            currentnode=currentnode.next
            
        }

        if(values.length>0) return console.log(value, ' is found ',values.length,' time(s)');

        return console.log(value,' is not in the link list')
       
    }

    get reverselistprint(){
        if(this.isEmpty==true)return console.log('list is empty');
        let previousnode=this.tail
        let reverselistvalues='null <--> '
        while(previousnode){
            reverselistvalues+=`${previousnode.value} <--> `
            previousnode=previousnode.previous
        }

        reverselistvalues+='null'

       return console.log('using tail node to print a reverse list: ',reverselistvalues);
    }
    reverselinklist(){
        if(this.isEmpty==true)return console.log('list is empty');
        let nextnode=null
        let previousnode=null
        let currentnode=this.head
        this.tail=this.head
      //  this.tail.previous=this.head.next
        while(currentnode){
            nextnode=currentnode.next
            
            currentnode.next=previousnode
            currentnode.previous=nextnode
            previousnode=currentnode
            currentnode=nextnode
        }

        this.head=previousnode

        
    }

    insertatindex(index,value){
        
        if(index<0||index>this.size) return console.log(index,'insert: index out of range');

        const node=new Node(value)
        if(this.head==null){
           this.head=node
           this.tail=node
           this.size++
           return
        }else if(index==0 && this.head !==null){
            node.next=this.head
            this.head.previous=node
            this.head=node
            this.size++
            return
        }
        else{

            let currentnode=this.head
            let str='::'
            for (let i = 0; i<index-1; i++) {
                str+=' '+currentnode.value+', '
                currentnode=currentnode.next
                
            }

            let nextnode=currentnode.next

            if(nextnode==null)
            {
                 console.log('this is the tail node ');
                currentnode.next=node
                node.previous=currentnode
                this.tail=node
                this.size++
                return
            } else{

                    currentnode.next=node
                    node.next=nextnode
                    node.previous=currentnode
                
                    this.size++
                }

        }
    
    }

}

const link= new linklist()
console.log('is list empty? ',link.isEmpty);
link.append(30)
link.append(40)
link.append(50)
console.log('is list empty? ',link.isEmpty);
link.print
link.preppend(20)
link.preppend(10)
link.preppend(0)
link.print

link.searchvalue(0)
link.searchvalue(100)
link.reverselistprint
 link.reverselinklist()
//  console.log(link.tail.previous);
link.print
// link.deletevalue(50)
link.reverselistprint
// link.insertatindex(3,100)
 link.insertatindex(6,100)
 link.insertatindex(6,1100)
 console.log(link.size);
// link.deletevalue(30)
// link.deletevalue(900)
// link.print

link.print

