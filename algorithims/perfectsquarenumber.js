/**
 * getting a perfect square number 
 * 
 * first function has a TC of O(n)
 * second function has a TC of O(log(n))
 * 
 * 
 */

function perfectsquareI(target){
    const halftarget=Math.floor(target/2)
    console.log(halftarget);

    for (let index = 0; index <= halftarget; index++) {
       
        // console.log(index);
      //  console.log('index: ',index,' indexsq: ',(index*index))

        if((index*index)==target) return console.log(target,' is a perfect square');
        
    }

    console.log(target,' is not a perfect square');
}
//perfectsquareI(25)



function perfectsquareII(target){
    //we attain half og the target since any  number greater than half then squared shall 
    //be greater than the target
    const halftarget=Math.floor(target/2)
  
    startpoint=1
    endpoint=halftarget
    midpoint=0
 
    while(startpoint<=endpoint){

        let midpoint=Math.floor((startpoint+endpoint)/2)
        //helps trace the values at each iteration
        //console.log('start:',startpoint,'mid:',midpoint,'end',endpoint);
        // if(startpoint>endpoint)return console.log(target, ' is not a perfect square')

        if((midpoint*midpoint)==target){return console.log(target, ' is a perfect square')}
        if((midpoint*midpoint)<target){startpoint=midpoint+1}
        if((midpoint*midpoint)>target){endpoint=midpoint-1  }



    }

    console.log(target,' is not a perfect square');
}

function perfectsquarerecurse(target) {

    let largest=Math.floor(target/2)
    let least=1
     squarerecurse(least,largest,target)
    
}

function squarerecurse(start,end,target){
    if(start>end)return console.log(target,' is not a perfect square');

    let midpoint=Math.floor((start+end)/2)

    if((midpoint*midpoint)==target) return console.log(target,' is  a perfect square');

    if((midpoint*midpoint)>target) return squarerecurse(start,midpoint-1,target)
    if((midpoint*midpoint)<target) return squarerecurse(midpoint+1,end,target)
}
//perfectsquareII(10000)
//perfectsquareI(10000)
perfectsquarerecurse(160000)
// IMPLIMENT IT WITH RECCURSION