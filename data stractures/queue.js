/*
A QUEUE IS AN ABSTRACT DATA STRACTURE DEFINED BY ITS BEHAVIOUR RATHER THAN IT BEING A MATHEMATRICAL MODEL
WE CAN CREATE A queue FROM EXTENDING FUNCTIONANLITY OF AN ARRAY
uses FIFO (first in first out) principle
real life examples of a queue a queue of people waiting in line  
main operations are push and pop
use case:
browser hsitory tracking
undo operation
call queue used in js runtime

*/

class Queue{
    constructor(){
        this.queue=[]
    }

    queueadd(element){
        this.queue.push(element)
        return console.log('queue added: ',this.queue);
    }

    queueremove(){
        const elemnenttoremove = this.queue[0]
        this.queue.shift()
        return console.log('element removed from queue: ',elemnenttoremove);
    }

    queuepeek(){
     if(this.queue.length>0)   return console.log(this.queue[0])
     return console.log('que is empty');

    }

    queueempty(){
        let isempty
        if(this.queue.length==0) isempty= true
        if(this.queue.length>0)  isempty= false

        return console.log('queue is empty: ',isempty)

    }

    getqueue(){
        return console.log('current queue: ',this.queue)
    }
}


/**
 * in this queue implimentation we switch from an array to an object as defult data holder
 * this enables us move from linear time complexity to constatnt time more so while dequing
 */


class QueueOptimized{
    constructor(){
        this.queue={}
        this.rearpointer=0
        this.frontpointer=0
    }

    queueadd(element){
       this.queue[this.rearpointer]=element
       this.rearpointer++
        return console.log('optimised queue added: ',this.queue);
    }

    queueremove(){

        if(this.rearpointer-this.frontpointer==0) return console.log('the queue is empty')
        const elemnenttoremove = this.queue[this.frontpointer]
        delete this.queue[this.frontpointer]
        this.frontpointer++
        return console.log('element removed from queue: ',elemnenttoremove);
    }

    queuepeek(){

        if(this.rearpointer-this.frontpointer==0) return console.log('the queue is empty')

     
     return console.log('queue top element: ',this.queue[this.frontpointer]);

    }

    queueempty(){
        let isempty
        if(this.rearpointer-this.frontpointer==0) isempty= true
        if(this.rearpointer-this.frontpointer!=0)  isempty= false

        return console.log('queue is empty: ',isempty)

    }

    getqueue(){
        return console.log('current queue: ',this.queue)
    }

    queuesize(){
        return console.log('queue size: ',this.rearpointer-this.frontpointer)
    }
}


/**
 * this is still aquue but limited with amount of data it can 
 * hold and its circular since the same memory allocation is used while queing and dequeing
 * its usecase is mainly for queues with a fixed queue length
 * use case clock streaming data traffic lights
 */

class CircularQueue{

    constructor(queuecapcity){
        this.queue=new Array(queuecapcity)
        this.capacity=queuecapcity
        this.currentlength=0
        this.rearpointer=-1
        this.frontpointer=-1
    }



    // add(element){

    //     if(this.currentlength==this.capacity && this.queue[0]!=null)  return console.log('queue is full',this.queue)
    //     if(this.queue[0]==null)  {this.rearpointer=-1;this.currentlength=0}
        
    //     this.rearpointer++
    //     if(this.rearpointer==0 && this.queue[this.rearpointer]!=null) this.frontpointer=0
    //     this.queue[this.rearpointer]=element
    //     this.currentlength++
    //     return console.log('element added to queue',this.queue)
 
    // }

    add(element){
if(this.full()==false){
    this.rearpointer=(this.rearpointer+1)%this.capacity
    this.queue[this.rearpointer]=element
    this.currentlength++
    if(this.frontpointer==-1)this.frontpointer=this.rearpointer
    return console.log('add to queue: ',this.queue)
}
//else{

    return console.log('cant add more queue is full')
//}
    }

    remove(){

       if(this.empty()==true) return console.log('dequeue: queue is empty');
        const element =this.queue[this.frontpointer]
        this.queue[this.frontpointer]=null
        this.frontpointer=(this.frontpointer+1)%this.capacity
        this.currentlength=this.currentlength-=1
       if(this.empty()==true) {this.frontpointer=this.rearpointer=-1}

        return console.log('dequeued top element: ',element);
      
    }

    peek(){

        if(this.empty()==true) return console.log('peek method: the queue is empty')

        console.log('top element in queue: ',this.queue[this.frontpointer])
    }

    empty(){
        let isempty
        if(this.currentlength==0) isempty= true
        if(this.currentlength>0)  isempty= false

         console.log('queue empty: ',isempty)

         return isempty

    }

    get(){
        return console.log('current queue: ',this.queue)
    }

    full(){
        // console.log('queue full: ',this.currentlength===this.capacity)

        return this.currentlength===this.capacity
    }

}
module.exports={
Queue,
QueueOptimized,
CircularQueue
}