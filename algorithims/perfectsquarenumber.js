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



// function perfectsquareII(target){
//     //we attain half og the target since any  number greater than half then squared shall 
//     //be greater than the target
//     const halftarget=Math.floor(target/2)
  
//     startpoint=1
//     endpoint=halftarget
//     midpoint=0
 
//     while(startpoint<=endpoint){

//         let midpoint=Math.floor((startpoint+endpoint)/2)
//         //helps trace the values at each iteration
//         //console.log('start:',startpoint,'mid:',midpoint,'end',endpoint);
//         // if(startpoint>endpoint)return console.log(target, ' is not a perfect square')

//         if((midpoint*midpoint)==target){return console.log(target, ' is a perfect square')}
//         if((midpoint*midpoint)<target){startpoint=midpoint+1}
//         if((midpoint*midpoint)>target){endpoint=midpoint-1  }



//     }

//     console.log(target,' is not a perfect square');
// }

function perfectsquarerecurse(target) {

    let largest=Math.floor(target/2)
    let least=1
     squarerecurse(least,largest,target)
    
}

function squarerecurse(start,end,target){
    if(start>end)return console.log(target,' is not a perfect square');
    let midpoint=Math.floor((start+end)/2)
    console.log('s',start,end,midpoint);

    if((midpoint*midpoint)==target) return console.log(target,' is  a perfect square');

    if((midpoint*midpoint)>target) return squarerecurse(start,midpoint-1,target)
    if((midpoint*midpoint)<target) return squarerecurse(midpoint+1,end,target)
}
//perfectsquareI(12000)
// perfectsquarerecurse(160000)
// perfectsquareII(160000)
// IMPLIMENT IT WITH RECCURSION


//O(n)
function perfectsquareI(target){

    let halfoftarget=Math.floor(target/2)

    for(num=1; num< halfoftarget; num++){

        if((num*num)==target) return console.log(target,' is perfect square');
    }

    return console.log(target,' is not perfect square');

}

function perfectsquareII(target){
    let halftarget=Math.floor(target/2)
    squarerecurseI(1,halftarget,target)
}

function squarerecurseI(start,end,target){


    if(start>end) return console.log(target,' is not a perfect square');

    let midpoint=Math.floor((start+end)/2)
    console.log('I',start,end,midpoint);

    if((midpoint*midpoint)==target) return console.log(target,' is a perfect square');
    if((midpoint*midpoint)>target)  return squarerecurse(start,midpoint-1,target)
    if((midpoint*midpoint)<target)  return squarerecurse(midpoint-1,end,target)

}


////////////////// self test 1 \\\\\\\\\\\\\\\\\\\\\\\\\\

//easy O(n)

function squaretestI(num) {

    let halfofnum=Math.floor(num/2)

    let start=1
    
    while (start<halfofnum) {

        if((start*start)==num) return console.log(num,' is a perfect square');
        start++
    }

    console.log(num,' is not a petrfect square');
    
}

//squaretestI(160)


//medium difficulty using reccursion O(logn)


function mediumsquare(num){

    let halfofnum=Math.floor(num/2)

    square(num,1,halfofnum)

}

function square(num,start,end){

    if(start>end) return console.log(num,' is not a perfect square');

    let midpoint=Math.floor((start+end)/2)

    if((midpoint*midpoint)==num) return console.log(num,' is a perfect square');
    if((midpoint*midpoint)>num) return square(num,start,midpoint-1)
    if((midpoint*midpoint)<num) return square(num,midpoint+1,end)


}

//mediumsquare(10000)



////// selftest 2 \\\\\\\\\
// O(n)

//easysquare(10000)

function easysquare(num) {

  //get half the size of original num
  let numcopy=num
  numcopy=Math.floor(numcopy/2)

  for (let i = 0; i <= numcopy; i++) {
   if(i*i==num) return console.log(num,'is square');
  }
    console.log(num,'not square');
}


mediumsquareIII(10000,0,Math.floor(10000/2))

function mediumsquareIII(num,start,end){


    if(start>end) return console.log(num,'medium not square');
    let midpoint= Math.floor((start+end)/2)

    if((midpoint*midpoint)==num) return console.log(num,' perfect squared');
    if((midpoint*midpoint)>num) return mediumsquareIII(num,start,midpoint-1)
    if((midpoint*midpoint)<num) return mediumsquareIII(num,midpoint+1,end)
}




