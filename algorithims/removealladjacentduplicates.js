/**
 * write an algorithim to remove all adacent letters within a streing
 * eg: abbacy should return cy since abbacy=>bb are adjacent we remain with aacy
 * we look through aacy are there adjacent duplicates? yes aa remove those look agin
 * there are no more adjacent duplicates we return cy
 */

function removeadjacentduplicates(word) {
    word=Array.from(word)

    for(i=0;i<word.length-1;i++){
       if(word[i]==word[i+1]){
        word.splice(i,2)
        i=i-2
       }
    }

    console.log(word.join(''));
    
}

removeadjacentduplicates('abbacyaa')