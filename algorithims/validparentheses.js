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






//validP('{}[]{[()]<>}')

//self test valid parenthese
//validtest('{}[]{[()]<>>[]]}')

function validtest(parenthese) {

    if(parenthese.length%2!==0) return console.log(parenthese,' inavlid due to its odd number length');
    let stack=[]
    let startguard=[']','}',')','>']
    let insert  =['[','{','(','<']
    if(startguard.includes(parenthese[0])||insert.includes(parenthese[parenthese.length-1])) return console.log(parenthese,'inavlid  due to guard check fail');
    for(i=0;i<parenthese.length;i++){
        if(insert.includes(parenthese[i])){
            stack.push(parenthese[i])
        }else{
            let popped=stack.pop()
            if(popped=='['&&parenthese[i] !=']') return console.log('1.',popped,parenthese[i],' invalid ');
            if(popped=='{'&&parenthese[i] !='}') return console.log('2.',popped,parenthese[i],' invalid ');
            if(popped=='('&&parenthese[i] !=')') return console.log('3.',popped,parenthese[i],' invalid ');
            if(popped=='<'&&parenthese[i] !='>') return console.log('4.',popped,parenthese[i],' invalid ');

        }
    }

    if(stack.length==0) return console.log(parenthese,' valid ');
    return console.log('final: ',parenthese,' invalid ');
    
}

validtestI('{}[]{[()]<<>>[]}')

function validtestI(s){

    if(s.length%2!=0) return console.log('not even number:',false,s.length);
    if(s[0]==']'||s[0]=='}'||s[0]==')'||s[0]=='>') return console.log(' wrong first char:',false,'"',s[0],'"');
    if(s[s.length-1]=='['||s[s.length-1]=='{'||s[s.length-1]=='('||s[s.length-1]=='<') return console.log(' wrong last char:',false,'"',s[s.length-1],'"');

let stack=[]

for(i=0;i<s.length;i++){
    let currchar=s[i]
    
    if(currchar=='['||currchar=='{'||currchar=='<'||currchar=='('){

        stack.push(currchar)
        // console.log(stack);

    }else{
        const popped=stack.pop()
        if(popped=='('&&currchar !=')') return console.log('not valid parentehses: ',popped,currchar);
        if(popped=='['&&currchar !=']') return console.log('not valid parentehses: ',popped,currchar);
        if(popped=='{'&&currchar !='}') return console.log('not valid parentehses: ',popped,currchar);
        if(popped=='<'&&currchar !='>') return console.log('not valid parentehses: ',popped,currchar);
    }


}

console.log('valid parentheses? ',stack.length===0);


}