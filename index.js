const {Stack,Queue,QueueOptimized,CircularQueue}=require('./data stractures/index.datastractures')



const stackdatastracturemethods=()=>{
    const stack = new Stack()       
    stack.stackadd(4)
    stack.stackadd(5)
    stack.stackadd(8)
    stack.stackpeek()
    stack.stackempty()
}

const queuedatastracturemethods=()=>{
    const queue = new Queue()       
    queue.queueadd(4)
    queue.queueadd(5)
    queue.queueadd(8)
    queue.queuepeek()
    queue.queueremove()
    queue.queuepeek()
    // queue.getqueue()
    queue.queueempty()
}


const queueoptimizeddatastracturemethods=()=>{
    const queueoptimized = new QueueOptimized()       
    queueoptimized.queueadd(4)
    queueoptimized.queueadd(5)
    queueoptimized.queueadd(8)
    queueoptimized.queuepeek()
    queueoptimized.getqueue()
    queueoptimized.queueremove()
    queueoptimized.queuepeek()
    queueoptimized.getqueue()
    queueoptimized.queueempty()
    queueoptimized.queuesize()

}

const circularqueuedatast4ructuremethods=()=>{
    const circularqueue =new CircularQueue(3)

    circularqueue.add(1)
    circularqueue.add(2)
    circularqueue.add(3)
    circularqueue.add(4)
}
// stackdatastracturemethods()
// queuedatastracturemethods()

// queueoptimizeddatastracturemethods()
circularqueuedatast4ructuremethods()