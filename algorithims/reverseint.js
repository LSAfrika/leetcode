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

reverseint(-522)