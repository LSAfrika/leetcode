/**
 * 
 * given 2 link list with single digit value add up the values of the list and return a new list
 * make sure to return each value with a single digit carry the remainder to next value
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
const list2=new list(4)
list2.next=new list(5)
list2.next.next=new list(9)
displaylist(list1)
displaylist(list2)
addlists(list1,list2)
function addlists(listA,listB) {

    let sumlist=new list(0)
    // console.log(sumlist);
    let remainder=0
    let _displaylist=sumlist

    while(listA||listB){

        if(listA&&listB){
            let sum=listA.value+listB.value

            if(remainder>0) sum+=remainder,remainder=0
            
          if(sum>=10){
            sum=sum-10
            if(sum>=0) remainder=1
           
          
          }
            sumlist.next=new list(sum)
            sumlist=sumlist.next
            listB=listB.next
            listA=listA.next

        }
        // else{

        // }
    }

    if(remainder>0)sumlist.next=new list(remainder)

    _displaylist=_displaylist.next
    displaylist(_displaylist)
    
}