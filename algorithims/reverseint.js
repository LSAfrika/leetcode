/**
 * Question:
 * Reverse digits of an integer. For example: x = 123, return 321.
 * avoid using string conversion
 */

function reverseint(num){

   
    let numcopy=num
    isnegativenum=false
    let modulus=0
    let intmap=[]
    let reverse=true
    let reversenum=0
    if(num<0) num=num*-1,isnegativenum=true
    while(reverse==true){
        reverse=false
        modulus=num%10


        if(modulus!==num) {
            reverse=true
            intmap.push(modulus)
            intmap=intmap.map(int=>int*10)
            
            num=Math.floor(num/10)
        }else{
            intmap.push(num)
             reversenum=intmap.reduce((total,initial)=>total+initial)
       

        }
      

    }

if(isnegativenum==true) reversenum=reversenum*-1
    console.log(numcopy,':',reversenum);



}

//reverseint(-522)

//easy
function reverseinttestI(num) {
let copynum=num
    if(num<0)copynum*-1
 
    let reversenum=parseInt(copynum.toString().split('').reverse().join(''))

    if(num<0)reversenum=reversenum*-1

    console.log(num,':',reversenum);

    
}
reverseinttestI(522)

//medium
function reverseinttestII(num) {

    let copynum=num
if(copynum<0)copynum=copynum*-1
    let modulus=0
    let  numsarray=[]

    while (modulus<copynum) {

        modulus=copynum%10
        if(modulus!==copynum){
            numsarray.push(modulus)
            numsarray=numsarray.map(num=>num*10)
            copynum=Math.floor(copynum/10)

        }else{
            numsarray.push(copynum)
        }
        
    }

    let reverseint=numsarray.reduce((total,acc)=>total+acc)

if(num<0)reverseint=reverseint*-1


console.log(num,":",reverseint);


    
}


reverseinttestII(-522)
