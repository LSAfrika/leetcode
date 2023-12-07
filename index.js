const {Stack,Queue,QueueOptimized,CircularQueue,LinkedList,headtaillinklist}=require('./data stractures/index.datastractures')



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
    linklist.append(40)
    linklist.viewlistvalues()
// linklist.insert(10,0)
console.log('=============insert node at given index ==================');

linklist.insertnode(100,1)
linklist.viewlistvalues()
linklist.linkedlistsize()

console.log('=============delete node at given index ==================');

linklist.deletenodeatgivenindex(0)
linklist.viewlistvalues()
linklist.linkedlistsize()
console.log('=============delete node with given value ==================');

linklist.deletenodewithgivenvalue(100)
linklist.deletenodewithgivenvalue(20)
linklist.viewlistvalues()
linklist.linkedlistsize()
console.log('=============reverse list ==================');
linklist.reverselist()

console.log('=============search list ==================');
linklist.search(40)
linklist.search(20)
linklist.search(10)
linklist.search(1000)

}

const headtaillist=()=>{
    const htlist= new headtaillinklist()

    console.log('=======================check empty list========================')
   console.log('is list empty?: ', htlist.isEmpty())


    // console.log('======================= apped list========================')

    htlist.append(40)
    htlist.append(30)
    htlist.append(20)
    htlist.append(10)
    console.log('=======================preview apped list========================')
    htlist.print()

    htlist.prepend(50)
    htlist.prepend(60)
    htlist.prepend(70)
    htlist.prepend(80)
    htlist.prepend(80)
    console.log('=======================preview preapped list========================')
    htlist.print()
    htlist.searchvalue(80)
    htlist.searchvalue(90)
    console.log('=======================preview reverse node values list========================')
    htlist.reverselist()
    console.log('=======================link list search ========================')
    htlist.searchvalue(80)
    htlist.searchvalue(90)

    console.log('=======================value at given index ========================')
htlist.print()
    htlist.valueatgivenindex(5)
    htlist.valueatgivenindex(10)



}

//linked_list()

headtaillist()


// stackdatastracturemethods()
// queuedatastracturemethods()

// queueoptimizeddatastracturemethods()
// circular_queue_data_structure()