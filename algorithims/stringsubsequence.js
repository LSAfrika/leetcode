/**
 * given 2 strings S and T return if S is a subsequence of T
 * 
 * a subsequence string is a string that is formed from deleteing letters from another string to form
 * the expected string
 * eg:"abcde" and "ace" returns true since ace can be attainded in said order by deleting "b,d"
 *    "cabed" and "ace" returns false since "ace" cant be attained in "cabed"
 */
//edge cases : the subsequence is not found in string "abcde" "dan"
function subsequence(string,target) {

    if(string==target) return console.log(true);
    let valueholder=[]
    let targetmap=new Map()
    Array.from(target).forEach(char => {

        targetmap.set(char,-1)
        
    });


  
    for(i=0;i<string.length;i++){

        let char=string[i]
        if(targetmap.has(char)&&targetmap.get(char)==-1) targetmap.set(char,i)   
    
    }


for([key,value] of targetmap.entries()){

    if(value==-1) return console.log(false);
    valueholder.push([key,value])
}

// console.log(valueholder);

valueholder=valueholder.map(index=>index[1])

for(i=0;i<valueholder.length-1;i++){
    let curr=valueholder[i]
    let next=valueholder[i+1]

    if(curr>next) return console.log(false);
}
    return console.log(true);
}

// subsequence('abcde','ace')
 subsequenceII('abcde','acd')


// second do over a more effecient way compared to the first
//time complexity of O(n) we traverse the string of the subsequence once and return the value
function subsequenceII(string,target){
    if(string==target) return console.log(true);

    let targetarray=Array.from(target).reverse()
 console.log(targetarray);
    for(char of string){
        if(char==targetarray[targetarray.length-1]){
            targetarray.pop()

          if(targetarray.length==0) return console.log(true);
        }


    }

    console.log(targetarray.length==0);

}



subsequenceIII('abcde','dac')
subsequenceIII('abcde','ace')
subsequenceIII('abcde','eab')


//time complexity O(nm) lebgth of target and string are multiplied not effecient
function subsequenceIII(string,target){

    let letterposition=[]
    for(i=0;i<target.length;i++){

        let charindex=string.indexOf(target[i])
        if( charindex==-1) return console.log(false);

        letterposition.push(charindex)

        if(letterposition.length>=2){

            console.log(letterposition);
            let last=letterposition[letterposition.length-1]
            let secondlast=letterposition[letterposition.length-2]

            if(last<secondlast) return console.log(false)
        }


    }

    return console.log(true)
}





