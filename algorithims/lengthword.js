/**
 * 
 * @param {s} string
 * retrieve the length of the last word within a sentrence
 *  
 */

function word(s) {

    if(s.trim().length==0)return console.log('string is empty');
   let stringarray=s.split(' ')
   let lastword=''
   let lastcounter=0
    // console.log(stringarray);

    while(lastword.length==0){
        lastcounter++
        lastword=stringarray[stringarray.length-lastcounter]
        
    }

    console.log(lastword,lastword.length);
    
}

word('hello there how are you    ')
word('   ')

lastwordlengthtest('   ')
lastwordlengthtest('hello there how are you    ')


function lastwordlengthtest(word) {

    let wordarray=Array.from(word)
    while(wordarray[0]==' '){
        wordarray.shift()
    }
    // console.log(wordarray);
    if(wordarray.length==0) return console.log('word has no chars');

    while(wordarray[wordarray.length-1]==' '){
        wordarray.pop()
    }
    if(wordarray.lengt==0) return console.log('word has no chars');

    wordarray=wordarray.join('').split(' ')
    let lastword=wordarray[wordarray.length-1]

    console.log('last word is "',lastword,'" and its length is ',lastword.length);
    
}