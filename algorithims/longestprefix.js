// /**
//  * returns the longest prefix in an array of words
//  * if a word is not similar to others we exit
//  */

// function longestprefix(words){
  
//     let prefix=''

//     let sortedwords=words.map(word=>Array.from(word)).sort((a,b)=>a.length-b.length).map(word=>word.join(''))
//     let shortestwordlength=sortedwords[0].length
//     let shortestword=sortedwords[0]
//     console.log(words,'\n',sortedwords,shortestwordlength);

//     if(!shortestword.length)return console.log('no prefix found');

//         for(i=1;i<sortedwords.length;i++){

//         let currentword=sortedwords[i]
//         let counter=0
//         // if(prefix.length!=0 && prefix.length<shortestwordlength) shortestwordlength=prefix.length
//         while(counter<shortestwordlength){


//         //if first letter of both words doesnt match return no prefix found
//             if(shortestword[0]!=currentword[0])return console.log('no prefix found');
//             if(shortestword[counter]==currentword[counter]){
               
            
//                 //if(i==1)console.log(counter,' :first word cycle',prefix[counter]);
//                 if(prefix[counter]!=shortestword[counter])prefix+=shortestword[counter]
//                 // console.log('prefix in while loop: ',prefix);
//             counter++

//             }else{
        
//                 // console.log(prefix);
//                 shortestwordlength=prefix.length
                
//             }
            


//         }
       

        
        
//     }

//     console.log('"',prefix,'"');

// }

function longestprefix(words) {
    
    console.log(words);

    words=words.map(word=>word.split('')).sort((a,b)=>a.length-b.length).map(word=>word.join(''))

    let firstword=words[0]
    let prefixlength=firstword.length
    let prefix=''
    for(i=1;i<words.length;i++){
    let currentword=words[i]
    let index=0
    while(index<prefixlength){
        if(firstword[0]!=currentword[0]) return console.log('""');

        if(firstword[index]==currentword[index]){

            if(prefix[index]!=currentword[index])prefix+=firstword[index]
            index++
        }else{
            prefixlength=prefix.length
        }

    }
    }
    console.log(`"${prefix}"`);
    
}


 longestprefix(['flour','floor','flower','flow','flew','flame'])



 function longestprefixtest(words){

    console.log(words);
    words=words.sort((word1,word2)=>word1.length-word2.length)
    console.log(words);

    let firstword=words[0]
    let currentlength=firstword.length
    let prefix=''

    for(i=1;i<words.length;i++){

        let currentword=words[i]
        let counter=0
        if(firstword[0]!==currentword[0]) return console.log('no prefix found');

        while(counter<currentlength){
            
            if(currentword[counter]==firstword[counter]){

             if(prefix[counter]!=currentword[counter])prefix+=currentword[counter]

            }else{

                currentlength=prefix.length
            }
            counter++


        }





    }


    console.log(prefix);

 }

 longestprefixtest(['flour','floor','flower','flow','floew','floame','dsf'])
