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


//REDO THIS A BUG HAS BEEN FOUND

function longestprefix(words) {
    

    words=words.sort((a,b)=>a.length-b.length)
    console.log(words);

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

 //longestprefixtest(['flour','floor','flower','flow','floew','flame'])
 longestprefixcorrect(['flour','floor','flower','flow','floew','flame','flme'])
 longestprefixcorrect(['flour','floor','flower','flow','floew','flome','dead'])
 longestprefix(['flour','floor','flower','failed','flowed','flew','flame'])


 /**
  * 
  * @param {string[]} words 
  * @returns {string}
  * 
  * time complexity O(np) where P denotes the length of the prefix
  * we use the last word in the array to avoid reindexing since space complexity is O(1) we achieve that 
  * by popping the last word
  */
 function longestprefixcorrect(words){
    console.log(words);
    let lastword = words.pop()
    let prefixletterarray=[]
    let prefix=''
    let prefixing=true
    let charindex=0

    while (prefixing) {
        prefixing=false

        for (let i = 0; i < words.length; i++) {
          let currentword=words[i]
          
              if  (currentword[0]!==lastword[0]) return console.log('"no prefix"');
              if  (currentword[charindex]==lastword[charindex]) prefixletterarray.push(currentword[charindex])
            
        }

        if(prefixletterarray.length==words.length){
            console.log(prefixletterarray);
            prefixing=true
            prefix+=prefixletterarray[0]
            prefixletterarray=[]
            charindex++
        }
        
    }

    return console.log(prefix);

 }
