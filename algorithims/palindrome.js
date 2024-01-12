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
palindrome(-12321)


