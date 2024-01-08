function quicksort(nums){

    if(nums.length<2){
    //  console.log('final nums',nums,nums.length);
        return nums
    }
    let pivot =nums[nums.length-1]
    let left=[]
    let right=[]

    for ( val of nums) {
          if(val>pivot) right.push(val)
        if(val<pivot) left.push(val)
        
    }
    return [...quicksort(left),pivot,...quicksort(right)]


  }

console.log(quicksort([1,4,3,7,98,6,50,200]));