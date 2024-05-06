/**
 * 34. Find First and Last Position of Element in Sorted Array MEDIUM


Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

 
 */

// findtarget([5,7,7,8,8,10],8)
// findtarget([5,7,7,8,8,10],6)
// findtarget([],6)
// findtarget([1,3],1)
// findtarget([1,1,1,3],1)
findtarget([1,2,3,3,3,3,4,5,9],3)
findtarget([1,2,2,3,4,4,4],4)

function findtarget(nums,target){
    let left= 0
    let right=nums.length-1
    let positions=[]

    while(left<right){
        let midpoint=Math.floor((left+right)/2)
        console.log('mid point: ',midpoint);
        let midvalue=nums[midpoint]

        if(midvalue==target){
            positions.push(midpoint)
            let left=1
            let right=1
            while( nums[midpoint-left]==target){positions.unshift(midpoint-left),left++}
            while( nums[midpoint+right]==target){
                console.log('index positive: ',midpoint+right,right);
                positions.push(midpoint+right),right++
            }
            if(positions.length<2){
                positions.push(positions[0])
            return console.log(positions)

            }

            if(positions.length>2)positions=[positions[0],positions[positions.length-1]]
            return console.log(positions)

        }
        if(midvalue>target){
            right=midpoint-1

            if(nums[midpoint-1]==target){
                positions.push(midpoint-1)
                
                if(nums[midpoint-2]==target)positions.push(midpoint-1)
                if(positions.length<2)positions.push(midpoint-1)
                return console.log(positions);
            }

        }else{
            left=midpoint+1

            if(nums[midpoint+1]==target){
                positions.push(midpoint+1)
                
                if(nums[midpoint+2]==target)positions.push(midpoint+1)
                if(positions.length<2)positions.push(midpoint+1)


                return console.log(positions);
            }

        }
    }

    return console.log([-1,-1])
}