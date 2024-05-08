

happynumber(10)
happynumber(19)


function happynumber(num){
        if(num==1) return console.log(true);

        result=0
        let numcopy=num
        testing=true
 
        let seenresult={}

        while (result!=1){
           
            testing=false
            let numarray=numcopy.toString().split('')
          
            result=0
            numarray.forEach(numinarray => {
                let num=parseInt(numinarray)
                
                result+=num*num
                
            });

       

            if(result==1) break
            if(seenresult[result]==1) return console.log(num,":",false);
            if(!seenresult[result]) {seenresult[result]=1}
          //  console.log(result,numarray,seenresult);

            numcopy=result

        }

        return console.log(num,":",true);
}