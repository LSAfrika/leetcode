const {
    Stack,Queue,
    QueueOptimized,
    CircularQueue,
    LinkedList,
    headtaillinklist,queuelinklist,stacklinklist, Doublylinklist
}
    =require('./data stractures/index.datastractures')



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

const doublelinklist=()=>{
    const doublylist= new Doublylinklist()

    doublylist.print()
    console.log('doubly link list size: ',doublylist.listsize());

    doublylist.append(30)
    doublylist.append(20)
    doublylist.append(10)
    doublylist.print()
    doublylist.prepend(40)
    doublylist.prepend(50)
    doublylist.prepend(60)
    doublylist.print()
    console.log('\n====================head node inspection====================\n');
    console.log('head value: ',doublylist.head.value ,'\n head previous: ',doublylist.head.previous?.value||null,'\n head next: ',doublylist.head.next.value);
    console.log('\n====================tail node inspection====================\n');
    
    console.log('tail value: ',doublylist.tail.value ,'\n tail previous: ',doublylist.tail.previous.value,'\n tail next: ',doublylist.tail.next?.value||null);
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

    console.log('\n=======================check empty list========================\n')
   console.log('is list empty?: ', htlist.isEmpty())


    // console.log('======================= apped list========================')

    htlist.append(40)
    htlist.append(30)
    htlist.append(20)
    htlist.append(10)
    console.log('\n=======================preview apped list========================\n')
    htlist.print()

    htlist.prepend(50)
    htlist.prepend(60)
    htlist.prepend(70)
    htlist.prepend(80)
    htlist.prepend(80)
    console.log('\n=======================preview preapped list========================\n')
    htlist.print()
    htlist.searchvalue(80)
    htlist.searchvalue(90)
    console.log('\n=======================preview reverse node values list========================\n')
    htlist.reverselist()
    console.log('\n=======================link list search ========================\n')
    htlist.searchvalue(80)
    htlist.searchvalue(90)

    console.log('\n=======================value at given index ========================\n')
    htlist.print()
    htlist.valueatgivenindex(5)
    htlist.valueatgivenindex(10)



}

const linklistqueue=()=>{

    const queuedatastracture= new queuelinklist()

    queuedatastracture.isempty()
    queuedatastracture.print()
    queuedatastracture.add(10)
    queuedatastracture.add(20)
    queuedatastracture.add(30)
    queuedatastracture.print()
    queuedatastracture.peek()
    queuedatastracture.remove()
    queuedatastracture.print()
    queuedatastracture.peek()
}
const linkliststack=()=>{

    const stackdatastracture= new stacklinklist()

    stackdatastracture.isempty()
    stackdatastracture.print()
    stackdatastracture.add(10)
    stackdatastracture.add(20)
    stackdatastracture.add(30)
    stackdatastracture.print()
    stackdatastracture.peek()
    stackdatastracture.remove()
    stackdatastracture.print()
    stackdatastracture.peek()
}

//linked_list()

//headtaillist()
doublelinklist()
// console.log('\n ==================link list queue======================\n');

// linklistqueue()
// console.log('\n ==================link list stack======================\n');
// linkliststack()

// stackdatastracturemethods()
// queuedatastracturemethods()

// queueoptimizeddatastracturemethods()
// circular_queue_data_structure()