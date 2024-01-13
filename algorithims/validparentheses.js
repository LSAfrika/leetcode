// function validP(word){

    
//     let valid={'{':'}','(':')','[':']'}
//     let startcheck=[']','}',')']
//     let endcheck=['[','{','(']
  
//     let verifier=[]

//     // console.log(startcheck.has('a'));
//     for ( char of word){

//         if(startcheck.includes(word[0])==true || endcheck.includes(word[word.length-1])==true) return console.log('invalid parentheses');

//         if(valid[char]){verifier.push(char)}
//         else{
//             console.log('verifier : ',verifier);
//                 console.log('char not key in map: ',char);
//             const lastelement= verifier.pop()

//          if(valid[lastelement]!== char) return console.log('invalid parentheses','\n element popped: ',lastelement,'value:',char );
            
//         }
//     }

//     console.log('valid parentheses');

// }

//

function validP(word) {

    if(word.length%2!==0)return console.log('string not even: ',false);
    let parnethesemap={
        '<':'>',
        '[':']',
        '(':')',
        '{':'}'
    }

    let startguard=['}',']','>',')']
    let endguard=['{','[','<','(']
    let stack=[]

    for(i=0;i<word.length;i++){
        let char=word[i]
        console.log(stack);

        if(parnethesemap[char]!=undefined){
            stack.push(char)
        }else{
            let lastchar=stack.pop()
            if(char !== parnethesemap[lastchar]) return console.log('not valid: ',false);

        }
    }

    return console.log(word,' is a valid parenthese: ',stack.length===0);
    
}






validP('{}[]{[()]<>}')