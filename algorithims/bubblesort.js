function bubblesort(nums){
if(nums.length<1) return console.log('array empty');
let sorted=true

while (sorted) {
    sorted=false

    for (let i = 0; i < nums.length; i++) {
       
        if(nums[i]>nums[i+1]){

            let next=nums[i]
            nums[i]=nums[i+1]
            nums[i+1]=next
            
            sorted=true
        }
        
    }
    

}
return console.log(nums);
}

bubblesort([1,3,2,5,8,3,2,90,7,34,2,12])