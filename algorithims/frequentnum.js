/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 * 
 */

repeatednum([6,6,6,7,7,1,1,1,1,1,1,1,1])

function repeatednum(nums) {
    if(nums.length==1) return nums[0]

    let frequencymap={}
    let output=0
    let highestfrequency=0
    for(num of nums){

        if(frequencymap[num]){
        frequencymap[num]=frequencymap[num]+1

        if(frequencymap[num]>highestfrequency){
            highestfrequency=frequencymap[num]
            output=num
        }
        }else{
            frequencymap[num]=1
        }
    }

    console.log(output,frequencymap);
    
}