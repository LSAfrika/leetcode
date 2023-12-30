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
    //console.log(halftarget);
    startpoint=1
    endpoint=halftarget
    midpoint=0
    searching=true
    while(startpoint<=endpoint){

        // searching=false
        let midpoint=Math.floor((startpoint+endpoint)/2)
        //helps trace the values at each itteration
        console.log('start:',startpoint,'mid:',midpoint,'end',endpoint);
        // if(startpoint>endpoint)return console.log(target, ' is not a perfect square')

        if((midpoint*midpoint)==target){return console.log(target, ' is a perfect square')}
        else if((midpoint*midpoint)<target){

            startpoint=midpoint+1
            //  searching=true
        }
        else  if((midpoint*midpoint)>target){ 
            endpoint=midpoint-1
            // searching=true
        }



    }

    console.log(target,' is not a perfect square');
}
perfectsquareII(10500)

// IMPLIMENT IT WITH RECCURSION