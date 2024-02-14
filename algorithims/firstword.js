// /**
//  * the algoritim returns first instance of a word within another word 
//  * its called haystack needle algoritgim
//  * eg hatstack="leetcode" needle="code"
//  * returns true and index of c=4
//  * hatstack="leetcode" needle="codee"
//  * returns false and -1
//  */
// function haystack(hay,needle){
//     if(hay.length<needle.length) return console.log(-1)

//     for(i=0;i<hay.length;i++){
//         if(hay[i]==needle[0]){
//             let word=hay.slice(i,i+needle.length)
//             if(word==needle) return console.log(needle,': occurs in ',hay,' from index ',i,' through to ',i+needle.length)

//         }
//     }

//     console.log(needle,' doesent occur in ',hay)
// }

haystack('wehkbkbndfsdfgbookskerhe','booK')


function haystack(hay,needle) {{

let hayarray=Array.from(hay)
    for(i=0;i<hayarray.length;i++){
        
        let curentchar=hayarray[i]
        if(curentchar==needle[0]){
            let stringcheck=hayarray.slice(i,i+needle.length).join('')
            if(stringcheck==needle)return console.log(needle,' begins at ',i)
        }


    }
    console.log(needle,' not in ',hay);
}
    
}






 haystackselftest('wehkbkbndfsdfgbookskerhe','ksk')


function haystackselftest(hay,needle){


    let needlewordlength=needle.length
    for(i=0;i<hay.length;i++){
        let currentchar=hay[i]
        if(needle[0]==currentchar){
            let wordcheck=hay.slice(i,i+needlewordlength)

            if(wordcheck==needle)return console.log(needle,'  is in ',hay,' as from index ',i);
        }
    

    }

    console.log(needle, ' not in ',hay);
}


haystack('wehkbkbndfsdfgbookskerhe','booK')
Test('wehkbkbndfsdfgbookskerhe','boo')

function Test(hay,needle){
    let needlelength=needle.length

    for (let i = 0; i < hay.length; i++) {
       let curentchar=hay[i]

       if(curentchar==needle[0]){
        let slice=hay.slice(i,i+needlelength)

        console.log(slice);
        if(slice==needle) return console.log(needle,i);
       }
        
    }

    return console.log(-1);
}



