
/**
 * 
 * Question:
Given a string, find the length of the longest substring without repeating characters. For
example, the longest substring without repeating letters 
eg:  “abcabcbb” is “abc”, whichthe length is 3. 
For “bbbbb” the longest substring is “b” with the length of 1.
 */

function unique(s){
    let substringarray=Array.from(s)
    let charmap=new Map()
    let substring=''
    for (const letter of substringarray) {

        if(charmap.has(letter)) return console.log(substring,substring.length)
        substring+=letter
        charmap.set(letter,letter)
        
    }
    console.log('all char are unique: ',substring)

}




/**
 * Given a string S, find the length of the longest substring T that contains at most two
 * distinct characters.For example,Given S = “eceba”,T is "ece" which its length is 3.
 *  
 */
function uniqueII(s){
    let substringarray=Array.from(s)
    let charmap=new Map()
    let substring=''
    for (const letter of substringarray) {

        if(charmap.has(letter)){
            
             return console.log(substring,substring.length)
            }
        substring+=letter
        charmap.set(letter,letter)
        
    }
    console.log('all char are unique: ',substring)

}

//unique('abcddedfghij')
//uniqueII('abcdedfghij')


//TEST 1\\

function unique(s){
    if(s.length==0)return console.log('empty string');
    let charmap={}
    let substring=''
    let substringarray=[]
    for (i=0;i<s.length;i++){
    let letter=s[i]

        if(charmap[letter]!==undefined){
              console.log(substring);

              substringarray.push({substring,length:substring.length})
              substringarray=substringarray.sort((a,b)=>b.length-a.length)
              substring=''
            
            }
        substring+=letter
        charmap[letter]=letter
        }

        console.log('longest substring: ',substringarray[0].substring,' length: ',substringarray[0].length);
}

//unique('abcdeafghijklmnoh')
substring('abcdeabefghdiajkclmnobh')
//uniqueII('abcdeabefghdiajkclmnobh')

function substring(s){
   
    let left=0
    let set=new Set()
    let sstring=s[0]
    let comparestring=''
   
    set.add(s[0])
    for(i=1;i<s.length;i++){
        // console.log(s[i]);
        if(set.has(s[i])){
          
            set.clear()  //'abcdeabfghijkclmnoh'
            set.add(s[left+1])
           

           
            if(comparestring.length<sstring.length)comparestring=sstring
           // sstring=''
            sstring=s[left+1]
            left++
            i=left
           
          //  right=left
            

         

            
        //    console.log('compare string: ',comparestring);
        }else{
         //   right++
            sstring+=s[i]
            // console.log(i,sstring);
        }


    }

   
    if(sstring.length>comparestring.length) return console.log(sstring);
    console.log(comparestring);
}




substringII('abcdeabefghdiaejkclmnobh')

function substringII(s){

    let substring=''
    let tempsubstring=s[0]
    let charset=new Set(s[0])
    let left=0

    for(i=1;i<s.length;i++){

        if(charset.has(s[i])){

            if(tempsubstring.length>substring.length) substring=tempsubstring
            charset.clear()
            charset.add(s[left+1])
            tempsubstring=s[i]
            left++
            i=left


        }else{
            
            tempsubstring+=s[i]


        }
    }

    (tempsubstring.length<substring.length) ? console.log(substring):console.log(tempsubstring);
    
    

}














