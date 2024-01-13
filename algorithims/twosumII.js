/**
 * 
 * given a sorted array retun the indexes with values that will add up to a given target
 * using an O(n logn) timecomplexity
 */
twosumIIsolution([1,2,3,4,5,6,7,8,9],5)


function twosumIIsolution( nums,  target) {
    // Assume input is already sorted.
    for ( i = 0; i < nums.length; i++) {
    let j = bsearch(nums, target - nums[i], i + 1);
    if (j != -1) {
    return console.log( i , j );
    }
    }
    console.log("No two sum solution");
    }
   function bsearch(nums, compliment,  start) {
    let L = start
    let R = nums.length - 1;
    while (L < R) {
    let M = (L + R) / 2;
    if (nums[M] < compliment) {
    L = M + 1;
    } else {
    R = M;
    }
    }
    return (L == R && nums[L] == compliment) ? L : -1;
    }


