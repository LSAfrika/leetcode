/**
 * Question:
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Example Questions Candidate Might Ask:
 * Q: Does the array contain both positive and negative integers?
 * A: Yes.
 * Q: Could any element appear more than twice?
 * A: No.
 */


//using higher order functions eg map and object
function singlenumberI(nums) {
 
    nummap=new Map()
    for(i=0;i<nums.length;i++){

        // if(i==nums.length) break
        // console.log(i);
      if(nummap.has(nums[i])){
        nummap.set(nums[i],nummap.get(nums[i])+1)
    }
      else{
        nummap.set(nums[i],1)
      }
        

    }
for([key,count] of nummap.entries()){

    if(count==1) return console.log(key);
}
   
    
}

singlenumberI([1,2,3,2,4,1,5,5,3])



// using inbuilt functions
function singlenumberII(nums) {
 nums=nums.sort((a,b)=>a-b)
 console.log(nums);
 indexview=''
 for (let i = 0; i < nums.length; i++) {
    const currentnum = nums[i];
    const nextnum    = nums[i+1];
   
    if(currentnum==nextnum)i++;
   
    if(currentnum!==nextnum) return console.log(currentnum);
    
 }
        

 
   
    
}

singlenumberII([1,2,3,2,4,1,5,4,3])