/**
 * Question:
 * Given an array of integers, every element appears three times except for one. Find that
 * single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without
 * using extra memory/space?
 */

//two edge cases if the first element is not equal how to handle it

function singlenumberIII(nums) {

    nums=nums.sort((a,b)=>a-b)


    if(nums[0]!=nums[1]) return console.log(nums[0])
    if(nums[nums.length-1]!=nums[nums.length-2]) return console.log(nums[nums.length-1])
    console.log(nums);

    for(i=0;i<nums.length;i++){
        // console.log(i);
        let [first,second,third]=[nums[i],nums[i+1],nums[i+2]]
        if(first==second&&second==third)
        {i+=2}else{
            console.log(first,second,third);
            // if(first!=second&&second==third) return console.log(first);
            // if(second!=first&&first==third) return console.log(second);
            // if(third!=second&&second==first) return console.log(first);
            return console.log(first);
        }
    }

}

singlenumberIII([1,2,6,6,3,5,6,3,1,1,3,5,4,5])