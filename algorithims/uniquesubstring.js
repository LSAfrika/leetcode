
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

        if(charmap.has(letter)) return console.log(substring)
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
            substring+=letter
             return console.log(substring,substring.length)
            }
        substring+=letter
        charmap.set(letter,letter)
        
    }
    console.log('all char are unique: ',substring)

}

unique('abcdedfghij')
uniqueII('abcdedfghij')