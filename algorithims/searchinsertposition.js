function searchinsert(nums,target){
    nums=nums.sort((a,b)=>a-b)
console.log(nums);
    for([index,num] of nums.entries()){

        if(target==num) return console.log(target,' is at index ',index);
        if(index==nums.length-1)return console.log(target,' insert at index ',index+1);
        if(index==0&&target<num)return console.log(target,' insert at index ',index);
        if(num<target&&target<nums[index+1])return console.log(target,' insert at index ',index+1);
    }

}



function searchinsertI(nums,target){
    nums=nums.sort((a,b)=>a-b)
console.log(nums);
    if(nums[0]>target)return console.log(target,' insert at index ',0)
    if(nums[nums.length-1]<target)return console.log(target,' insert at index ',nums.length)
    for([index,num] of nums.entries()){
    if(target==num) return console.log(target,' at index ',index)
    
    if(num<target&&target<nums[index+1]) return console.log(target,'insert at index ',index+1)


}


}
//  searchinsert([100,34,21,67,900,87],5000)
//  searchinsertI([100,34,21,67,900,87],50)


 // TEST 1

 function searchinserttestI(nums,target) {
    nums=nums.sort((a,b)=>a-b)

    if(nums[0]>target) return console.log(target, ' insert at index: ',0);
    if(nums[nums.length-1]<target)return console.log(target,' insert at index: ',nums.length);

    for(i=0;i<nums.length;i++){
        let currentnum=nums[i]
        let nextnum=nums[i+1]

       
        if(currentnum<target&&target<nextnum) return console.log(target,' insert at index',i+1);

    }
    
 }

 searchinserttestI([100,34,21,67,900,87],3)
