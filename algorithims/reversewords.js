
/**
 * 
 * @param {*} s
 * algorithim to reverse words in a sentence 
 */


function reverseword(s) {

    s=s.split(' ').reverse().join(' ')

    console.log(s);
    
}

reverseword('hello world new')