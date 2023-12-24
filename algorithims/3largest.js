function three(arr){

    if(!arr.length) return console.log('array is empty');
    let heap={
        largest:0,
        larger:0,
        large:0
    }
let largestnum,largernum,largenum
    for (i=0;i<arr.length;i++) {
     if(i==0)  heap.largest=arr[i]
     
     if(i==1) heap.larger=arr[i]

     
     if(i==2)heap.large=arr[i]
console.log('before:',heap);
     if(heap.largest<arr[i]){
        largestnum=heap.largest
        heap.largest=arr[i]
        if(heap.larger!=0){largernum=heap.larger;heap.larger=largestnum}
        
     
    }
}



    console.log('after: ',heap)
}

// three([10,2,3,4,5,6])

function returnprevious(arr,val){

    if(val<0||val>arr.length) return console.log('out of bounds');
    if(val==0)return console.log('start val: ',arr[0]);
    for (let index = 0; index < arr.length; index++) {
        if(index==val-1) return console.log('previous value ',arr[index]);
        
    }
}

returnprevious([1,2,3,4,5,6,7],5)