function quicksort(arr){
    if(arr.length<2){return arr}
   let  rightarray=[]
    let leftarray=[]
   let  pivot=arr[arr.length-1]

    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>pivot)rightarray.push(arr[i])
        if(arr[i]<pivot)leftarray.push(arr[i])
        
    }

    // console.log(leftarray,rightarray);

    return [...quicksort(leftarray),pivot,...quicksort(rightarray)]
}

console.log(quicksort([18,5,4,9,7,0,7,3,19,67,4]));