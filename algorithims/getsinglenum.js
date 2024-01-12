// Question:
// Given an array of integers, every element appears twice except for one. Find that single
// one.

function oneuniquenumber(nums){
     if(!nums.length)return console.log(-1);


    //   nums=nums.sort((a,b)=>a-b)
    //   console.log(nums);
      let numsmap=new Map()

      for ( num of nums) {

        if(numsmap.has(num)){
            numsmap.set(num,false)
        }else{
            numsmap.set(num,true)
        }

        
      }

      for ([key,value] of numsmap.entries()) {
console.log(key,value);
        if(value==true)  return console.log(key,' is the unique intager');
        
      }
}





//oneuniquenumber([1,1,2,2,-2,-2,6,5,7,5,9,7,8,8,9])


// Question 2:
// Given an array of integers, every element appears three times except for one. Find that
// single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without
// using extra memory?


function oneuniquenumberII(nums) {

nums=nums.sort((a,b)=>a-b)
console.log(nums);
for(i=0;i<nums.length;i++){
    console.log('current index: ',i);
    let first=nums[i]
    let second=nums[i+1]
    let third=nums[i+2]

    if(first==second&&second==third){ i=i+2, console.log(first,second,third);} 
    else{ return console.log(first,' is the unique number');}
}
    
}

oneuniquenumberII([1,1,1,2,2,2,-2,-2,-2,6,5,5,7,7,5,9,9,8,7,8,8,9])












