const{ headtaillinklist}=require('../list/headtail.linkedlist')

class stacklinklist{
    constructor(){
        this.queue=new headtaillinklist()
    }

    isempty(){
         return console.log('is stack empty? ',this.queue.isEmpty())
    }

    size(){
        console.log('stack size: ',this.queue.listsize());
    }
    print(){
        this.queue.print()
    }

    peek(){

      return  console.log('stack top value: ',this.queue.head.value);
    }

    add(value){
        this.queue.append(value)

    }
    remove(){
        this.queue.stackremove()
    }
}

module.exports={stacklinklist}