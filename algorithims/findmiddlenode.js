
/**\
 * find middle node of a linkedlist
 * solution:
 * we use the fast slow technique in that we have two counters onwe is moving at double the
 * speed of the other counter so that when the quicker counter has hit the end of the list the slow counter
 *  should be half way through the list
 * @param slow 
 * @param fast 
 */



function list(value){
    this.value=value
    this.next=null
}

const list1=new list(10)
 list1.next=new list(20)
 list1.next.next=new list(30)
 list1.next.next.next=new list(40)
 list1.next.next.next.next=new list(50)
//  list1.next.next.next.next.next=new list(60)
//  list1.next.next.next.next.next.next=new list(70)


 function middlenode(head){

    if(head==null)return console.log('empty list');
    let slow=head
    let fast=head

    while(fast.next){
        fast=fast.next.next
        slow=slow.next
    }

    console.log(slow);
 }

 middlenode(list1)