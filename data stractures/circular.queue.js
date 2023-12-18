/**
 * circular queue is just a modified queue where we have a fixed queue size
 * just like the regular queue D.S this is an abstract type
 * this queue reuses the same memory allocation 
 * we have guard checks for so as to not go beyond array size 
 * methods defined:
 *                 enqueue      =>to add element to queue
 *                 dequeue      =>to remove element from queue
 *                 peek         =>check top most element in queue 
 *                 isEmpty      =>check to see if queue is empty returns a boolean
 *                 isFull       =>check to see if queue is full returns a boolean
 *                 print       =>view values in queue
 */


class Circularqueue
{


    
    constructor(capacity){
        this.items=new Array(capacity)
        this.capacity=capacity
        this.rear=this.front=-1
        this.currentlength=0
    }

get queuelength(){
    return this.currentlength
}
    get isEmpty(){
        // console.log(`is queue empty? ${this.currentlength==0}`);
         return this.currentlength==0
    }

    get isFull(){
       //  console.log(`is queue full? ${this.currentlength==this.capacity}`);
        return this.currentlength==this.capacity
    }

    enqueue(value){
        if(this.isFull==true) return console.log('enqueue:queue is full');
        this.rear=(this.rear+1)%this.capacity
        this.items[this.rear]=value
        this.currentlength++
        if(this.front==-1)this.front=this.rear

    }

    dequeue(){
        if(this.isEmpty==true) return console.log('dequeue:queue is empty');
        const deuquedelement=this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1)%this.capacity
        this.currentlength--
        if(this.isEmpty==true)this.front=this.rear=-1


    }

    peek(){
        if(this.isEmpty) return console.log('peek:no value in queue');
        return console.log(`peek:top element ${this.items[this.front]}`);
    }

    print(){
        if(this.isEmpty) return console.log('print:queue is empty');
        let i
        let queuevalue='queue values: '
        for ( i = this.front; i !==this.rear; i=(i+1)%this.capacity) {
            queuevalue+=this.items[i]+' '
            //console.log(i);
        }

        queuevalue+=this.items[i]
            //console.log('i after for loop: ',i);

        return console.log(queuevalue);

    }
    
}


const cqueue=new Circularqueue(5)
 console.log( 'queue empty?', cqueue.isEmpty)
 console.log( 'queue full?', cqueue.isFull)
//cqueue.isFull
cqueue.print()
console.log('current queue length ',cqueue.queuelength);
cqueue.enqueue(10)
cqueue.enqueue(20)
cqueue.enqueue(30)
cqueue.enqueue(40)
cqueue.enqueue(50)
cqueue.print()
cqueue.dequeue()
cqueue.dequeue()
cqueue.print()
cqueue.enqueue(60)
cqueue.enqueue(70)
cqueue.print()
console.log('current queue length after insetion ',cqueue.queuelength);
