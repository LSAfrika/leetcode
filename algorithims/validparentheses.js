function validP(word){

    
    let valid={'{':'}','(':')','[':']'}
    let startcheck=[']','}',')']
    let endcheck=['[','{','(']
  
    let verifier=[]

    // console.log(startcheck.has('a'));
    for ( char of word){

        if(startcheck.includes(word[0])==true || endcheck.includes(word[word.length-1])==true) return console.log('invalid parentheses');

        if(valid[char]){verifier.push(char)}
        else{
            console.log('verifier : ',verifier);
                console.log('char not key in map: ',char);
            const lastelement= verifier.pop()

         if(valid[lastelement]!== char) return console.log('invalid parentheses','\n element popped: ',lastelement,'value:',char );
            
        }
    }

    console.log('valid parentheses');

}

validP('{}[]{[()]}')