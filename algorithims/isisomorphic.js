


isomorphic('egg','add')
isomorphic('foo','bar')
isomorphic('paper','title')


function isomorphic(s,t) {
    if(s.length !=t.length) return console.log(false);

    let freqmap={}

    for(i=0;i<s.length;i++){
        let key=s[i]
        let val=t[i]

        if(!freqmap[key]){
            freqmap[key]=val
        }else{
            if(freqmap[key]!=val) return console.log('is isomorphic: ',false);

        }

    }
    return console.log('is isomorphic: ',true);
}