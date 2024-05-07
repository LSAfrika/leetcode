/**
 *2. Add Two Numbers Medium 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
 *
 */





function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
    //Test 1

    // const listone=new ListNode(2)
    // listone.next= new ListNode(4)
    // listone.next.next= new ListNode(3)

    // const listtwo=new ListNode(5)
    // listtwo.next= new ListNode(6)
    // listtwo.next.next= new ListNode(4)

 //   test 2
    const listone=new ListNode(9)
    listone.next=new ListNode(9)
    listone.next.next=new ListNode(9)
    listone.next.next.next=new ListNode(9)
    listone.next.next.next.next=new ListNode(9)
    listone.next.next.next.next.next=new ListNode(9)
    listone.next.next.next.next.next.next=new ListNode(9)
    listone.next.next.next.next.next.next.next=new ListNode(9)
    listone.next.next.next.next.next.next.next.next=new ListNode(9)

    const listtwo=new ListNode(9)
    listtwo.next=new ListNode(9)
    listtwo.next.next=new ListNode(9)
    listtwo.next.next.next=new ListNode(9)
    

   

// ineffecient way
    function mergelist(l1,l2){

        let remainder=0
        let newlist= new ListNode(-1)
        let copy=newlist
        while (l1&&l2) {
            console.log(l1.val,l2.val);
            let val=l1.val+l2.val
            if(remainder!=0){val+=remainder,remainder=0}
            if(val>9){
               
                remainder=val-10
                newlist.next=new ListNode(remainder)
                if (remainder!=0||val==10) remainder=1
                
              
                newlist=newlist.next
            }else{

                newlist.next=new ListNode(val)
                newlist=newlist.next
            }
            l1=l1.next
            l2=l2.next
            
        }


        while (l1 !=null) {
            let val =l1.val
            if(remainder !=0) val+=remainder,remainder=0

            if(val>9){
                remainder=val-10
            
                newlist.next=new ListNode(remainder)
                if (remainder==0) remainder=1
                newlist=newlist.next


            }else{

            newlist.next=new ListNode(val)
            newlist=newlist.next

            }
            l1=l1.next
        }

        while (l2 !=null) {
            let val =l2.val
            if(remainder !=0) val+=remainder,remainder=0

            if(val>9){
                remainder=val-10
            
                newlist.next=new ListNode(remainder)
                if (remainder==0) remainder=1
                newlist=newlist.next


            }else{

            newlist.next=new ListNode(val)
            newlist=newlist.next

            }
            l2=l2.next
        }
   
        if(remainder !=0) newlist.next= new ListNode(remainder)





            while (copy) {
                console.log(copy.val);
                copy=copy.next
                
            }
    }

  //  mergelist(listone,listtwo)
    addTwoNumbers(listone,listtwo)


    function addTwoNumbers(l1,l2){

        let node= new ListNode(-1)
        let outputnode=node
        let remainder=0
        let listvalone=[]
        let listvaltwo=[]
        let outputlist=[]
        while(l1){
            listvalone.push(l1.val)
            l1=l1.next 
        }
        while(l2){
           
            listvaltwo.push(l2.val)
            l2=l2.next 
           
        }

        if(listvalone.length==listvaltwo.length){
        for(i=0;i<listvalone.length;i++){
            let one=listvalone[i]
            let two=listvaltwo[i]

            let value=one+two
            if(remainder!=0) value+=remainder,remainder=0
            if(value>9){
                remainder=value-10
                outputlist.push(remainder)
                if(value>=10) remainder=1
            }else{
                outputlist.push(value)
                

            }

        }
        if(remainder!=0) outputlist.push(remainder)

        }else if(listvalone.length>listvaltwo.length){

            for(i=0;i<listvalone.length;i++){
                let one=listvalone[i]
                let two=listvaltwo[i]||0
    
                let value=one+two
                if(remainder!=0) value+=remainder,remainder=0
                if(value>9){
                    remainder=value-10
                    outputlist.push(remainder)
                    if(value>=10) remainder=1
                }else{
                    outputlist.push(value)
                    
    
                }

                
            }
            if(remainder!=0) outputlist.push(remainder)


        }else{

            for(i=0;i<listvaltwo.length;i++){
                let one=listvalone[i]||0
                let two=listvaltwo[i]
    
                let value=one+two
                if(remainder!=0) value+=remainder,remainder=0
                if(value>9){
                    remainder=value-10
                    outputlist.push(remainder)
                    if(value>=10) remainder=1
                }else{
                    outputlist.push(value)
                    
    
                }

                
            }
            if(remainder!=0) outputlist.push(remainder)

        }

        outputlist.forEach(val=>{
            node.next=new ListNode(val),console.log(node.val,val), node=node.next})
      
            return outputnode.next

    }