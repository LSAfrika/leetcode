/**
 * GIVEN AN ARRAY OF NUMBERS WHERE EACH VALUE IS 
 * A WEIGHT FIND THE LAST WEIGHT AFTER CANCELING THE 2 LARGEST WEIGHTS
 * AFTER EACH ITTERATION
 * 
 * eg [1,4,2,3]=>2 largest weights 4-3=1 
 * if the remaining value is greater than 0 push it back =>[1,2,1]
 * largest weights 2-1=1 =>[1,1] => 1-1 =0 hence we have no last weight since the array is empty
 * 
 * [1,2.1,3]=>3-2=1 =>[1,1,1]=> 1-1=0 =>[1] hence last weight is 1
 */

function lasweight(weights){

    while(weights.length>1){
        weights=weights.sort((a,b)=>a-b)
        let[weightone,weighttwo]=[weights[weights.length-1],weights[weights.length-2]]
        weights.splice(weights.length-2)
        let balanceweight=weightone-weighttwo
        if(balanceweight>0)weights.push(balanceweight)

    }

    console.log(weights);
}

lasweight([1,2,1,6])