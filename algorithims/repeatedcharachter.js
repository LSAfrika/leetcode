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
mostrepeat('*&^%$#@@!%$6890-////088676')