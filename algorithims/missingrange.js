/**
 * Question:
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its
 * missing ranges.
 * For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]
 */

function missingrange(nums){

    if(nums.length==0) return console.log('0-->99');
    nums=nums.sort((a,b)=>a-b)
    range=[]

    for(i=0;i<nums.length;i++){


        if(i==0&&nums[i]!==0){
            if(nums[i]==1)range.push('0')
            if(nums[i]>1)range.push(`0-->${nums[i]-1}`)
        }
        let currentint=nums[i]
        let nextint=nums[i+1]

        if(nextint-currentint==2)range.push(`${currentint+1}`)
        if(nextint-currentint>2)range.push(`${currentint+1}-->${nextint-1}`)

        if(i==nums.length-1&&nums[nums.length-1]!==99){
            if(99-nums[nums.length-1]==1){
                range.push('99')
            }else if(99-nums[nums.length-1]>=2){
                range.push(`${nums[nums.length-1]+1}-->99`)
            }
        }
    }

    return console.log(range);

}

 missingrange([3,4,7,9,12,13,23,70,90])
// missingrange([])


function missingrangetest(nums) {
if(nums.length<1) return console.log("0-->99");
let ranges=[]
let counter=0
nums=nums.sort((a,b)=>a-b)
while(counter<nums.length){
    if(counter==0&&nums[counter]!=0){
       
        if(nums[0]==1)ranges.push(`"0"`)
        if(nums[0]>1) ranges.push(`"0-->${nums[0]-1}"`)
    }
    if(nums[counter+1]-nums[counter]==2){ranges.push(`"${nums[counter]+1}"`)}
    else if(nums[counter+1]-nums[counter]>2){
        // console.log(nums[counter],nums[counter+1]);
        ranges.push(`"${nums[counter]+1}-->${nums[counter+1]-1}"`)
    }

    if(counter==nums.length-1&&nums[nums.length-1]!==99){
        if(99-nums[nums.length-1]==1){
            ranges.push('"99"')
        }else if(99-nums[nums.length-1]>=2){
            ranges.push(`"${nums[nums.length-1]+1}-->99"`)
            

        }
    }
    counter++
}


console.log(ranges);
    
    
}




 missingrangetest([1,3,4,7,9,12,13,23,70,98])
 missingrangetest([1,3,4,7,9,12,13,23,70,97])
// missingrangetest([2,3,4,7,9,12,13,23,70,90])
