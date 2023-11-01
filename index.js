const {Stack,Queue,QueueOptimized,CircularQueue,LinkedList}=require('./data stractures/index.datastractures')



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

const circular_queue_data_structure=()=>{
    const circularqueue =new CircularQueue(4)
    circularqueue.get()
    circularqueue.peek()

    circularqueue.add(1)
    // circularqueue.remove() 
    circularqueue.add(2)
    circularqueue.peek()

    // circularqueue.remove()
    circularqueue.add(3)
    circularqueue.peek()

    circularqueue.remove()
    circularqueue.add(4)
    circularqueue.add(5)
    circularqueue.add(6)

     circularqueue.peek()

    // circularqueue.add(5)
    // circularqueue.add(6)
    // circularqueue.add(7)
    // circularqueue.add(8)

}


const linked_list=()=>{
    const linklist=new LinkedList()

    // console.log(linklist.linkedlistempty());
    // console.log(linklist.linkedlistsize());
    linklist.viewlistvalues()
    console.log('=============prepend value ==================');

    linklist.prepend(20)
    linklist.prepend(30)

    linklist.append(60)
    linklist.append(50)
linklist.append(10)
linklist.append(40)
linklist.append(40)
linklist.view()

linklist.searchlist(40)
linklist.searchlist(400)
linklist.searchlist(10)
// linklist.view()
// linklist.removenode()
}
// stackdatastracturemethods()
// queuedatastracturemethods()

// queueoptimizeddatastracturemethods()
// circular_queue_data_structure()

linked_list()