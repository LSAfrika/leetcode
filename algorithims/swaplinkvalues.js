/**
 * Question:
 * Given a linked list, swap every two adjacent nodes and return its head.
 * For example,
 * Given 1  2  3  4, you should return the list as 2  1  4  3.
 * Your algorithm should use only constant space. You may not modify the values in the
 * list, only nodes itself can be changed.
 * Example Questions Candidate Might Ask:
 * Q: What if the number of nodes in the linked list has only odd number of nodes?
 * A: The last node should not be swapped.
 */

function list(value){
    this.value=value
    this.next=null
}
function displaylist(nodelist) {

    let value=''
    while (nodelist) {
        value+=nodelist.value+' --> '
        nodelist=nodelist.next
    }

    value+=' null'

    console.log(value);
    
}

const list1=new list(1)
list1.next=new list(8)
list1.next.next=new list(9)
list1.next.next.next=new list(10)
list1.next.next.next.next=new list(11)
list1.next.next.next.next.next=new list(12)
list1.next.next.next.next.next.next=new list(15)
list1.next.next.next.next.next.next.next=new list(16)
list1.next.next.next.next.next.next.next.next=new list(17)

displaylist(list1)
//swapnodes(list1)
swapnodesII(list1)


function swapnodes(nodelist) {
    // console.log(nodelist)
    let returnedlist=new list(0)
    let viewretunedlist=returnedlist

    while (nodelist&&nodelist.next) {
        let currentnodevalue=nodelist.value
        let nextnodevalue=nodelist.next.value
        // console.log(currentnodevalue,nextnodevalue);
        returnedlist.next=new list(nextnodevalue)
        // console.log('returned list value: ',returnedlist.value);/
        returnedlist.next.next=new list(currentnodevalue)

        nodelist=nodelist.next.next 
        returnedlist=returnedlist.next.next
        // console.log('input list: ',returnedlist);
        // console.log('output list: ',viewretunedlist);
        
    }

    if(nodelist) returnedlist.next=nodelist;
viewretunedlist=viewretunedlist.next
// console.log(viewretunedlist);
displaylist(viewretunedlist);

}

function swapnodesII(nodelist) {

    while(nodelist&&nodelist.next){
        let currentnodevalue=nodelist
        console.log('current node',currentnodevalue.value);
        let nextnodevalue=nodelist.next
        console.log('next node',nextnodevalue.value);


        nodelist=nextnodevalue
        nodelist.next=currentnodevalue
        nodelist.next.next=nextnodevalue.next
        nodelist=nodelist.next.next

        console.log(nodelist);
        break

    }
    displaylist(nodelist)
}