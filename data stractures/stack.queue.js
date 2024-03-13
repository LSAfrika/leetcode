class Stack{
    constructor(){
        
        this.stack=[]
    }

    get Empty(){
        return this.stack.length===0
    }

    get size(){
        return this.stack.length
    }

    peek(){
        return console.log(this.stack[this.stack.length-1]);
    }

    add(val){
        this.stack.push(val)
    }

    remove(){
        this.stack.pop()
        return console.log(this.stack);
    }
}

const stack=new Stack()

console.log('stack empty: ',stack.Empty);console.log('stack size: ',stack.size);

stack.add(1),stack.add(2),stack.add(3),stack.add(4),stack.peek(),stack.remove()


class Queue{
    constructor(){
        this.queue={}
        this.size=0
        this.firstin=0
    }

    get qsize(){
        return this.size
    }
    
    get Empty(){
        return this.size===0
    }

    peek(){
        console.log('peek: ',this.queue[this.firstin]);
    }

    add(val){

        this.queue[this.size]=val
        this.size++
    }

    pop(){
        delete this.queue[this.firstin]
        this.firstin++
        // console.log(this.queue);
    }
}

// const Q=new Queue()
// console.log('queue empty: ',Q.Empty);console.log('queue size: ',Q.size);
// Q.add(1),Q.add(2),Q.add(3),Q.add(4),Q.peek(),Q.pop(),Q.peek()


class CircularQueue{
    constructor(capcity){
        this.queue={}
        this.head=-1
        this.tail=-1
        this.maxsize=capcity
        this.length=0
    }

    get Full(){
        return this.length-this.maxsize==0
    }

    get Empty(){
        return this.length==0
    }

    

    add(val){

        if(this.Full) return console.log('circular queue is full');
       
        this.head=(this.head+1)%this.maxsize

        this.queue[this.head]=val
        this.length++

        if(this.tail==-1)this.tail=this.head

    }

    peek(){
        console.log(this.queue[this.tail]);
    }

    pop(){
        delete this.queue[this.tail]
        this.tail=(this.tail+1)%this.maxsize
        this.length--

    }

    view(){
        return console.log(this.queue);
    }
}

const cs= new CircularQueue(10)

console.log('circular queue empty: ',cs.Empty);
console.log('circular queue full: ',cs.Full);
cs.add(1)
cs.add(2)
cs.add(3)
cs.add(4)
cs.add(5)
cs.view()
cs.add(6)
cs.peek()
// cs.pop()
cs.add(6)
cs.view()
cs.peek()
cs.add(7)