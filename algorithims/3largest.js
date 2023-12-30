function three(arr){

    let heap=new Array(3)

    for(value of arr){

        if(!heap[0]||heap[0]<value){
            heap[2]=heap[1]
            heap[1]=heap[0]
            heap[0]=value

        }else  if(!heap[1]||heap[1]<value){
            heap[2]=heap[1]
            heap[1]=value


        }
        else  if(!heap[2]||heap[2]<value){
            heap[2]=value
        }
    }




    console.log(heap)
}



function returnprevious(arr,val){

    if(val<0||val>arr.length) return console.log('out of bounds');
    if(val==0)return console.log('start val: ',arr[0]);
    for (let index = 0; index < arr.length; index++) {
        if(index==val-1) return console.log('previous value ',arr[index]);
        
    }
}

three([1,2,3,4,5,6,7])