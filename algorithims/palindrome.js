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
palindrome(12321)



// SELFT TEST ON PALINDROME ALGORTITHIM
function palindromeeasyI(num){
    let numreverse=parseInt(num.toString().split('').reverse().join(''))

    console.log(num,' is palindrome? ',num===numreverse);
}
palindromeeasyI(12311)


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
palindromeeasyII(12311)

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

palindromemedium(12321)
