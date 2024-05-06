// 34. Find First and Last Position of Element in Sorted Array
// Solved
// Medium
// Topics
// Companies

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


firstlast([5,7,7,8,8,10],8)
firstlast([5,7,7,8,8,10],7)

function firstlast(nums,target){

    let positions=[]

    let firstvalue=recurse(nums,target,true)
    let lastvalue=recurse(nums,target,false)

    positions=[firstvalue,lastvalue]
    console.log(positions);


}

function recurse(nums,target,issearchingleft){

    let left=0
    let right=nums.length-1
    let idx=-1
    while(left<=right){
        let midpoint=Math.floor((left+right)/2)

        if(nums[midpoint]==target){

            idx=midpoint
            if(issearchingleft==true)right=midpoint-1
            if(issearchingleft==false)left=midpoint+1

        }else if(nums[midpoint]>target){
            right=midpoint-1

        }else if(nums[midpoint]<target){
            left=midpoint+1

        }
    }

    return idx

}