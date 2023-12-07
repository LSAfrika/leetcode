class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class headtaillinklist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }


    isEmpty(){
       

        return this.size===0
    }

    prepend(value){

        const newnode= new Node(value)

        if(this.isEmpty())
        {this.head=this.tail=newnode;}

        else{

             const headnode=this.head
             newnode.next=headnode
             this.head=newnode
         }



        this.size++

    }

    append(value){

        const newnode= new Node(value)

        if(this.isEmpty())
        {this.head=this.tail=newnode;}
        
        else{

             const tailnode=this.tail
             tailnode.next=newnode
             this.tail=newnode
         }



        this.size++
    }


    print(){

        if(this.isEmpty()) return console.log('this list is empty');
        let currentnode=this.head
        let listvalues=''
        while (currentnode) {

            listvalues+=`${currentnode.value} --> `
            currentnode=currentnode.next
            
        }

        listvalues+='null'
        console.log(listvalues)
    }

    reverselist(){
        let previousenode=null
        let currentnode=this.head
        let nextnode=null
        let reversenodevalue='null '
        let counter=0
        while (currentnode) {

            nextnode=currentnode.next
            currentnode.next=previousenode
            if(counter==0)this.tail=currentnode
            counter++
            previousenode=currentnode
            currentnode=nextnode
            reversenodevalue+=`<-- ${previousenode.value} `
        
        }
        this.head=previousenode

        console.log('head node value:',this.head.value,'tail node value: ',this.tail.value,'\n','reverse node values list: \n',reversenodevalue)
   
    }

    searchvalue(value){
        if(this.isEmpty()) return console.log('the linklist is empty')
        let valulist=[]
        let currentnode=this.head
        for (let i = 0; i < this.size; i++) {
         if(currentnode.value==value)valulist.push(i)
         currentnode=currentnode.next        
        }

        if(valulist.length>0) return console.log(value,'occurs',valulist.length,'time(s) at index ',valulist)
        return console.log(value,'is not within the link list');
    }
    valueatgivenindex(index){
        if(this.isEmpty()) return console.log('the linklist is empty')
        if(index<0||index>this.size) return console.log('value out of range')
        let  currentnode=this.head
        for (let i = 0; i < this.size; i++) {
          

            if(i==index) return console.log('value at index ',index,' is ',currentnode.value);
            currentnode=currentnode.next
            
            
        }


    }

    stackremove(){
        if(this.isEmpty()) return console.log('stack is empty');
        if(this.size==1)
        {
             this.head=this.tail=null
        }else{

            this.head=this.head.next
        }

        this.size--
    }

    queueremove(){
        if(this.isEmpty()) return console.log('queue is empty');
        let currentnode=this.head
        while (currentnode.next!=this.tail) {
            currentnode=currentnode.next
        }
        currentnode.next=null
        this.tail=currentnode
        this.size--

    }
    listsize(){
        return this.size
    }
}


module.exports={headtaillinklist}