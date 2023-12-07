const Stack= require('./stack')
//  const Queue= require('./queue')
//  const QueueOptimized= require('./queue')

const {Queue,QueueOptimized,CircularQueue}=require('./queue')

const {LinkedList}=require('./list/linkedlist')
const {headtaillinklist}=require('./list/headtail.linkedlist')
const {queuelinklist}=require('./list/queue.linklist')
const {stacklinklist}=require('./list/stack.linklist')
const {Doublylinklist}=require('./list/doubly.linklist')
module.exports={
    Queue,QueueOptimized,CircularQueue,Stack,LinkedList,headtaillinklist,queuelinklist,stacklinklist,Doublylinklist
}