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

//  searchinserttestI([100,34,21,67,900,87],3)


//medium
//big O(log n)
 searchinsertposition([1,2,3,4,6,8],5)

 function searchinsertposition(nums,target) {

   
    let left=0
    let right=nums.length
if(nums[0]>target) return console.log(0);
if(nums[nums.length-1]<target) return console.log(nums.length);
    while(left<=right){
        let midpoint=Math.floor((left+right)/2)
        // console.log('midpoint val: ',nums[midpoint],'midpoint index: ',midpoint,'target: ',target);
        if(nums[midpoint]==target) return console.log('target found: ',midpoint);
        if(target>nums[midpoint]) {
            left=midpoint+1

            if(nums[left]<target&&target<nums[left+1]) return console.log(target,' insert at index: ',left);


        }else{
            right=midpoint

            if(nums[right-1]<target&&right<nums[right]) return console.log(target,' insert at index: ',right-1);

        }

    }

}
