
/**
 * 
 * @param {*} s
 * algorithim to reverse words in a sentence 
 * Question:
 * Given an input string s, reverse the string word by word.
 * For example, given s = "the sky is blue", return "blue is sky the".
 * 
 * 
 * 
 * 
 */


function reverseword(s) {

    s=s.split(' ').reverse().join(' ')

    console.log(s);
    
}

reverseword('hello world new')


//TEST 1

function reversewordtestI(s) {

    if(s.trim().length==0) return console.log('string is empty');
let scopy=s
    scopy=scopy.split(' ').reverse().join(' ')
    console.log(s,":",scopy);

}

reversewordtestI('hello world new  _')















