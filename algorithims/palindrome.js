/**
 * Question:
 * Determine whether an integer is a palindrome. Do this without extra space.
 * and not convering it into a string
 */

function palindrome(num){
    if(num<0)return console.log(num,' is not a palindrome');
    let numcopy=num
    let modulus=0
    let intholder=[]
    let ispalindrome=true
    let check=0
    while(ispalindrome){
        ispalindrome=false
        modulus=num%10
        if(modulus!=num) {
            ispalindrome=true
            intholder.push(modulus)

            intholder=intholder.map(int=>int*10)
            num=Math.floor(num/10)
        }else{
             intholder.push(num)
        // console.log(num,modulus,intholder);


        }
       
    console.log();

    }
     check=intholder.reduce((total,current)=>total+current)
    console.log(numcopy,'is palindrome:',check==numcopy);


}
//palindrome(12321)



// SELFT TEST ON PALINDROME ALGORTITHIM
function palindromeeasyI(num){
    let numreverse=parseInt(num.toString().split('').reverse().join(''))

    console.log(num,' is palindrome? ',num===numreverse);
}
//palindromeeasyI(12311)


function palindromeeasyII(num){
    let numreverse=num.toString()

    let left=0
    let right  =numreverse.length-1

    console.log(numreverse);
    while(left<=right){

        if(numreverse[left]!==numreverse[right]) return console.log( num,' is not a palindrome');
        left++
        right--
    }

    console.log(num,' is a palindrome');
}
//palindromeeasyII(12311)

function palindromemedium(num){

    let numcopy=num
    let modulus=0
    let reversearry=[]
    let dividing=true
    while(dividing){
     modulus=numcopy%10
     
     if(modulus !==numcopy){
         reversearry.push(modulus)

         reversearry=reversearry.map(numcopy=>numcopy*10)
         numcopy=Math.floor(numcopy/10)
         console.log("number ",numcopy,' modulus:',modulus);
     }else{
        console.log("number ",numcopy,' modulus:',modulus);

    reversearry.push(numcopy)
    dividing=false
     }
     

    }
    let check=reversearry.reduce((total,currentvalue)=>total+currentvalue)
    console.log(check);

    console.log('is ',num,' a palindrome? ',num==check, reversearry);
}

//palindromemedium(12321)


//palindrome selftest

function testpalindrome(num) {

    let numcopy=num
    let modulus=0
    let result=[]

    while (modulus!=numcopy) {

      

        modulus=numcopy%10
    
        if(modulus!=numcopy){
            result.push(modulus)
            result=result.map(num=>num*10)
            numcopy=Math.floor(numcopy/10)
        }else{
          

            result.push(numcopy)

        }
        
    }
    console.log('after while loop: ',modulus,numcopy);

    let sumcheck=result.reduce((total,curr)=>total+curr)

    console.log(num,' is palinrome? ',sumcheck==num,result);
    
}

//testpalindrome(12321)

//console.log(Math.floor(1/10))


// test 2 more effecient way to to reverse an intager

//palindrometesII(12331)
function palindrometesII(num) {

    let numcopy=num
    let dividing=true
    let reverse=0
    while (dividing) {

        dividing=false
        console.log('num copy divided: ',numcopy);
        if(numcopy<=0) break


        reverse=reverse*10+numcopy%10

        numcopy=Math.floor(numcopy/10)

     //  if(numcopy>0)    
            dividing=true

    }

    console.log('broke out of loop');
    console.log(reverse,' :reverse: ',num);
    console.log(reverse,' is a plaindrome: ',reverse==num);
    
}


//palindrometestIII(1212)

function palindrometestIII(num) {

let copynum=num

let dividing=true
let reversenumber=0

while (dividing) {
    dividing=false

    if(copynum<=0) break

    reversenumber=reversenumber*10+copynum%10
    copynum=Math.floor(copynum/10)
    dividing=true

    
}

console.log(num,'palindrome: ',reversenumber==num)
    
}

palindrometestIV(1212)
palindrometestIV(121)


function palindrometestIV(num){
    if(num<0) return console.log(false);

    let modulus=0
    let copy=num
    let modulating=true

    while (modulating) {
        modulating=false
        modulus=modulus*10+copy%10
        copy=Math.floor(copy/10)
        if(copy>0)modulating=true
        
    }

    return console.log(modulus==num);
}