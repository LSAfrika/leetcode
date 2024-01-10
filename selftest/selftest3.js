function twosum(nums,target){
    if(nums.length<2)return console.log('short arry')

    let map= new Map()
    for([index,num]of nums.entries()){

        let compliment = target-num
        if(map.has(compliment)){
            return console.log(map.get(compliment),index)
        }else{
            map.set(num,index)
         
        }
    }

    console.log('not found');
}

function palindrome(num){
    if(num<0)return false

   let original=num
  //  return console.log(num);
    ispalindrome=true
let modulusremainder=0
let check=0
let numsarray=[]
    while (ispalindrome) {

        ispalindrome=false

        modulusremainder =num%10
        if(num !=modulusremainder){
            ispalindrome=true
            numsarray.push(modulusremainder)
            numsarray=numsarray.map(num=>num *10)
            num=Math.floor(num/10)
        }else{
            numsarray.push(modulusremainder)
        }
        
    }


    check=numsarray.reduce((accum,current)=>accum+current)
  

    console.log(numsarray,check,original);

    return check=== original
}


console.log(palindrome(12231));
//twosum([2,5,4,6,7,8],15)