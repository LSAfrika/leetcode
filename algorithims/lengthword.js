/**
 * 
 * @param {s} string
 * retrieve the length of the last word within a sentence
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

// word('hello there how are you    ')
// word('   ')

// lastwordlengthtest('   ')
// lastwordlengthtest('hello there how are you    ')


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
    if(wordarray.length==0) return console.log('word has no chars');

    wordarray=wordarray.join('').split(' ')
    let lastword=wordarray[wordarray.length-1]

    console.log('last word is "',lastword,'" and its length is ',lastword.length);
    
}

function lastwordlengthtestII(word){

    if(word.trim().length==0) return console.log('string empty');

  
    let wordarray= word.split('')

  
    while(wordarray[wordarray.length-1].trim().length==0){

        
       wordarray.splice(wordarray.length-1)
    }

    console.log(wordarray[wordarray.length-1],' is the last word and its length is: ',wordarray[wordarray.length-1].length );

}


 //lastwordlengthtestII('  3 ')

//  laswordI('  3 ')
//  laswordI('      ')

 function laswordI(word) {

    if(word.trim().length==0) return console.log('string empty');


    word=word.split(' ')

    console.log(word);

    while(word[word.length-1].length==0){
        word.pop()
    }
    console.log(word[word.length-1].length);
    
 }

 //self test 4 lastword 
 //added effeciency to it in that we start from the back of the string moving backwords
// lastwordIV('')
 lastwordIV('  ')
lastwordIV('hello worlds    ')

 function lastwordIV(s) {
    //check if string is empty
    if(s.trim().length==0) return console.log(-1);
    let lastwordlength=0
    for (let i = s.length-1; i >0; i--) {
      if(s[i]==' '){ 
        if(lastwordlength>0) return console.log(lastwordlength);  
        continue
    }
      else{lastwordlength++}
    }
    
 }