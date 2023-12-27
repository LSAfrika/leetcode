function uniquechar(word){
    let letters=word.split('')
    if(!letters.length) return console.log('empty string provided');

    let charachtermap={}

    for(letter of letters){
        if(charachtermap[letter]!=undefined) charachtermap[letter]=false

        if(charachtermap[letter]==undefined) charachtermap[letter]=true
        
    }

   //  console.log(charachtermap);


    for([index,letter] of letters.entries()){
        if(charachtermap[letter]==true) return console.log(letter,' is the first unique char at index ',index);
    }


    return console.log('no unique chars found');
}

uniquechar('ssdwewetgfdggrtrqgffg')