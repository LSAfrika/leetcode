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

        let currentint=nums[i]
        let nextint=nums[i+1]

        if(nextint-currentint==2)range.push(`${currentint+1}`)
        if(nextint-currentint>2)range.push(`${currentint+1}-->${nextint-1}`)
    }

    return console.log(range);

}

missingrange([1,3,4,7,9,12,13,23,70,99])
missingrange([])