/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]

 

Constraints:

    The number of nodes in the list is n.
    1 <= n <= 500
    -500 <= Node.val <= 500
    1 <= left <= right <= n

 
Follow up: Could you do it in one pass?
 */


function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }



    const list= new ListNode(1)
    list.next= new ListNode(2)
    list.next.next= new ListNode(3)
    list.next.next.next= new ListNode(4)
    list.next.next.next.next= new ListNode(5)

reverseBetween(list,2,4)

    function reverseBetween(head, left, right) {

        let curr=head
        let values=false
        let reversevalues=[]
        let originalvalues=[]
    
        let counter=0
        
      while(curr){
        
        if(curr.val==left)values=true,counter++
        if(values==true)reversevalues.unshift(curr.val)
        if(values==false&&counter>0)reversevalues.push(curr.val)
        if(values==false&&counter==0)originalvalues.push(curr.val)
        if(curr.val==right)values=false
        curr=curr.next
        
            }

            console.log(originalvalues,reversevalues);
    
            let finalvalues=[...originalvalues,...reversevalues]
            console.log(finalvalues);

            let node= new ListNode(finalvalues[0])
            let prevnode= new ListNode(-1,node)

            for(i=1;i<finalvalues.length;i++){
                node.next=new ListNode(finalvalues[i])
                node=node.next
            }
            console.log(prevnode.next);
        };


    function viewlistnode(nodelist) {
        let val=[]
        console.log(nodelist);
        while(nodelist){
            val.push(nodelist.val)
            nodelist=nodelist.next
        }
        console.log(val);
        
    }


    function nodetest(nodelist) {
        let testnode=new ListNode(-1,nodelist)

        while(nodelist){
            nodelist=nodelist.next
        }

        console.log(testnode,nodelist);
        
    }