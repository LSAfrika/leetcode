function twosum(nums,target) {
    
    if(nums.length<2) return console.log('array too small');
    let store={ }

    for (let i = 0; i < nums.length; i++) {
     //console.log(store);
       if(store[nums[i]] !=undefined)  return  console.log(store[[nums[i]]],',',i)

            //meta data just to see what the map contains upon getting value
            // store[target-nums[i]]=i
          //   console.log(nums[i]);
           
             
            

        store[target-nums[i]]=i
        
    }

    return console.log(-1);
}

twosum([1,4,5,3,6,7,8,2],90)