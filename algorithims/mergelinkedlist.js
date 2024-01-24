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

const list1=new list(10)
list1.next=new list(20)
list1.next.next=new list(30)
const list2=new list(40)
list2.next=new list(50)
list2.next.next=new list(60)
displaylist(list1)
displaylist(list2)

function mergelists(listA,listB) {{


    
    let outputlist=new list(0)
    let head=outputlist
    while(listA||listB){


       // console.log('a val: ',listA.value,' b val: ',listB.value,' outist val: ',outputlist.value);

        if(listA&&listB){
            if(listA.value>listB.value){
                outputlist.next=listB
                listB=listB.next
            }else  if(listA.value<listB.value){
                outputlist.next=listA
                listA=listA.next
            }
            else if(listA.value==listB.value){
                outputlist.next=listA||listB
                listA=listA.next
                listB=listB.next
            }

        }else if(listA && !listB){

        outputlist.next=listA
        listA=listA.next

        }else if(!listA&&listB){
            outputlist.next=listB
            listB=listB.next

        }
     
        outputlist=outputlist.next
    }

    head=head.next
   displaylist(head)
}
    
}

mergelists(list1,list2)