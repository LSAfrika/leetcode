// Question:
// Validate if a given string is numeric.
// Some examples:
// "0"       true
// "0.1"     true
// "abc"     false
// Example Questions Candidate Might Ask:
// Q: How to account for whitespaces in the string?
// A: When deciding if a string is numeric, ignore both leading and trailing whitespaces.
// Q: Should I ignore spaces in between numbers – such as “1 1”?
// A: No, only ignore leading and trailing whitespaces. “1 1” is not numeric.
// Q: If the string contains additional characters after a number, is it considered valid?
// A: No. If the string contains any non-numeric characters (excluding whitespaces and decimal
// point), it is not numeric.
// Q: Is it valid if a plus or minus sign appear before the number?
// A: Yes. “+1” and “-1” are both numeric.

function validnumber(s) {
    
    let nums=['1','2','3','4','5','6','7','8','9','0','.']

    while(s[0]==' '){
        let array=s.split('')
        array.splice(0,1)
        s=array.join('')
    }
    console.log(s);

    for (i=0;i<s.length;i++){

       
        if(i==s.length-1&&s[s.length-1]==' ')break
       
    
        if(s[i]=='.'){ 

            if(s[i-1]==undefined)return console.log(s[i],'cant be imitial index');
            if(s[i-1]&&s[i-1]==' '||s[i-1]=='.') return console.log(s,'not a valid num (./" ")');

       
            }

        if(s[i-1]!==' '&&nums.includes(s[i])==false) {

            console.log('invalid s: ',nums.includes(s[i]),'=',s);
                   return console.log(s,'is an invalid number');
        }


    }


        return console.log(s,'is a valid number');
    
}

function splicenum(s){
let array
    while(s[0]==' '){
         array=s.split('')
         array.splice(0,1)
       //  console.log(array);
         s=array.join('')
        // return console.log('joined:',s);
    }
    return console.log(s);

}
validnumber('    0. 23 ')
// splicenum('    0.23 ')