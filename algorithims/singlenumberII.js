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

//singlenumberIII([1,2,6,6,3,5,6,3,1,1,3,5,4,5])


//test 3
//singlenumbertesteasy([1,6,6,3,5,6,3,1,1,3,5,4,5])

function singlenumbertesteasy(nums) {

    // nums=nums.sort((a,b)=>a-b)
    let unique=-1
    let hashmap=new Map()
    nums.forEach(num => {

        if(hashmap.has(num)) hashmap.set(num,hashmap.get(num)+1)
        if(!hashmap.has(num)) hashmap.set(num,1)


    });

    hashmap.forEach((value,key)=>{
     
    
        if(value==1) return console.log('unique number: ',key);
    
    })

    
}


//singlenumbertestmedium([1,3,5,6,6,6,3,3,5,4,4,4,5])


// here we sort the arry then traverse the array edge
// case occurs if the number is at the start or the end 
function singlenumbertestmedium(nums) {

     nums=nums.sort((a,b)=>a-b)
     console.log(nums);
     //edge case when number is at the begining
     if(nums[nums.length-1]!=nums[nums.length-2]&&nums[nums.length-2]==nums[nums.length-3]) return console.log(nums[nums.length-1]);
    
     //edge case when number is at the end
    
     if(nums[0]!=nums[1]&&nums[2]==nums[1]) return console.log(nums[0]);
for(i=0;i<nums.length-2;i++){
    let prev=nums[i]
    let curr=nums[i+1]
    let next=nums[i+2]

    if(prev==curr&&curr==next) {i+=2}
    else{
        return console.log(prev);
    }

}

    
}

//singlenumIV([1,6,6,3,5,6,3,1,1,3,5,4,5])
singlenumIV([1,1,1,3,5,6,6,4,4,6,5,4,5])


function singlenumIV(nums) {

    nums=nums.sort((a,b)=>a-b)

    //edge cases where number is at begining or end
    //  console.log(nums);
    if(nums[0]!==nums[1]&&nums[1]==nums[2]) return console.log(nums[0])
    if(nums[nums.length-1]!==nums[nums.length-2]&&nums[nums.length-2]==nums[nums.length-3]) return console.log(nums[nums.length-1])


    for(i=0;i<nums.length-2;i++){
        let current=nums[i]
        let next=nums[i+1]
        let nextnext=nums[i+2]
      //  console.log('current index',i,current,next,nextnext);

        // console.log(current,next,nextnext);
      if(current==next&&next==nextnext)  {
        // console.log('numbers match',i);
        i+=2
      }else{
        return console.log(current);
      }
        

    }

    console.log('no unique');
    
}