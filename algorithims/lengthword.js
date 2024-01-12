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