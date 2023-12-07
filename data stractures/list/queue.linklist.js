const{ headtaillinklist}=require('../list/headtail.linkedlist')

class queuelinklist{
    constructor(){
        this.queue=new headtaillinklist()
    }

    isempty(){
         return console.log('is queue empty? ',this.queue.isEmpty())
    }

    size(){
        console.log('queue size: ',this.queue.listsize());
    }
    print(){
        this.queue.print()
    }

    peek(){

      return  console.log('queue top value: ',this.queue.tail.value);
    }

    add(value){
        this.queue.prepend(value)

    }
    remove(){
this.queue.queueremove()
    }
}

module.exports={queuelinklist}