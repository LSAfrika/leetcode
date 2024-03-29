// Question:
// Given an integer, convert it to a roman numeral.
// Input is guaranteed to be within the range from 1 to 3999.

// Roman Literal
// I=1,V=5, X=10, L=50, C=100, D=500, M=100

function romannumber(num) {

    num=num.toUpperCase()
    console.log(num);
    let intnum=0
    let romanmap={
        I:1,V:5, X:10, L:50, C:100, D:500, M:1000
        
    }
    console.log(romanmap);

    for(i=0;i<num.length;i++){
        let currentnum=romanmap[num[i]]
        let nextnum  =romanmap[num[i+1]]
console.log(currentnum,nextnum,intnum);
        if(currentnum<nextnum  ){
            intnum+=nextnum-currentnum
            i++
        }else{
            intnum+=currentnum
        }


    }
console.log(intnum)
    
}

romannumber('mdcdl')

//TEST 1

function romannumbertestI(num){
    let romanmap={
        I:1,V:5, X:10, L:50, C:100, D:500, M:1000
        
    }
    let result=0
    num=num.toUpperCase()
    for(i=0;i<num.length;i++){
        let currentnum  =romanmap[num[i]]
        let nextnum     =romanmap[num[i+1]]

        if(nextnum>currentnum){
            result+=(nextnum-currentnum)
            i++
        }else{
            result+=currentnum

        }
    }

    console.log(result);
}

romannumbertestII('xxix')



//tes 2

function romannumbertestII(num){


    num=num.toUpperCase()
    let romanmap={
        I:1,V:5, X:10, L:50, C:100, D:500, M:1000
        
    }

    let result=0

    for(i=0;i<num.length;i++){
        let currentnum=romanmap[num[i]]
        let nextnum   =romanmap[num[i+1]]

        if(currentnum<nextnum){
            result+=nextnum-currentnum
            i++
        }else{
            result+=currentnum
        }
    }

    return console.log(result);

}

