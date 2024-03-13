function mostrepeat(inputstring){

    let charachtermap={}
    let counter=0
    let char=''

    //we split and the string to get an array then loop through 
    inputstring.split('').forEach(s => {


        //create a regez to check if passed string is a letter 
        if((/[a-zA-Z]/).test(s)==true) {

             //  check if the map has key of current looped charachter
            if(charachtermap[s]!=undefined){
            //if letter is defined we incrementr the value by one
                charachtermap[s]=charachtermap[s]+1
                // then we do a check for size in map if cureent key value size is greater than counter we update
                //both max counter and charachter field
                if(charachtermap[s]>counter) counter=charachtermap[s],char=s
            }

            // if map doesnt have key we set key in the map  
            else{

                charachtermap[s]=1
                // if counter is 0 this means its the first cycle through the array hence we set both counter to 1 and char to current 
                // letter
                if(counter==0)counter=1,char=s
            }
        }
    });

if(counter==0)    return console.log('no letter was found in string');
console.log(char,' is repeated ',counter,' times');
console.log();

}
mostrepeat('sdfsferwfdgteyrtgdsaswe////etrrgfgio088676')
// mostrepeat('*&^%$#@@!%$6890-////088676')


// SELF TEST 1\\
function mostrepeattestI(word){
if(word.length<1) return console.log('empty string -1');

let charmap={}
let char=''
let count=0

for(letter of word){


    if((/[a-zA-Z]/).test(letter)==false) continue

        if(charmap[letter]!=undefined){
            charmap[letter]=charmap[letter]+1
            if(charmap[letter]>count){
                count=charmap[letter]
                char=letter
            }
        }else{
    
            // if(count==0)count=1
            charmap[letter]=1
        }
    

}

console.log(char,count);


}

mostrepeattestI('sdfsferwfdgteyfrrrrrrtgdsaswe////etrrgfgio088676')
repeatedcharII('sdfsferwfdgteyrtgdsaswe////etrrgfgio088676')

repeatedcharII('sdfsferwfdgteyfrrrrrrtgdsaswe////etrrgfgio088676')


// SELF TEST 2\\

function repeatedcharII(word){

    counter=0
    letter=''
    let charmap={}

    for (const char of word) {
        
   

if((/[a-zA-Z]/).test(char)==true){
   
    if(charmap[char]){
        charmap[char]+=1
        if(charmap[char]>counter) letter=char,counter=charmap[char]

    }else{

        charmap[char]=1
        if(counter==0)letter=char,counter++

    }
}
        
    }

    console.log(letter,counter);
}
