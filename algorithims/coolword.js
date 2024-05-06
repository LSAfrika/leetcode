
// find all cool strings within a given string s of length L where no charachter is reapeating

function coolword(s,l){

    let coolword=new Set(s[0])
    let left=0
    let right=1
    let word=0
    let cw=[]
    
   while(right<s.length){
       
        if(!coolword.has(s[right])){
            coolword.add(s[right])
            if(coolword.size==l){
                word++

                cw.push([...coolword])
               
                coolword.delete(s[left])
                console.log('coolword current: ',...coolword);
            
                left++
                // i=right


            }
            right++

        }else{

            coolword.delete(s[left])
          
              
            left++
         //   right=left
            
         
        }

    }

    console.log(word,cw);

}

coolword('abcdcfce',4)
coolword('abcdcfde',4)