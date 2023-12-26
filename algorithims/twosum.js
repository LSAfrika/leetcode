function twosum(nums,target) {
    
    if(nums.length<2) return console.log('array too small');
    let store={ }

    for (let i = 0; i < nums.length; i++) {
     //console.log(store);
        if(store[nums[i]] !=undefined) {
            store[target-nums[i]]=i
            return  console.log(store[[nums[i]]],',',i,' : ',store)
             
            }

        store[target-nums[i]]=i
        
    }

    return console.log('target sum not found');
}

twosum([1,4,5,3,6,7,5,3],9)