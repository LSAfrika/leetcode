
/**
 * 
 * self test 1 meetingrooms 1 and 2 
 * chunked array
 * first unique and array of unique chars in a string
 * 
 */

function meetingroomsI(meetings){
    if(meetings.length===1) return console.log(meetings.length);

    let sortedmeetings=meetings.sort((a,b)=>a[0]-b[0])
    console.log(sortedmeetings);
    let currentmeetingendtimetime= sortedmeetings[0][1]
    let meetingstarttime=0
    let meetingendtime=1
    for (let meetingtimes = 1; meetingtimes < sortedmeetings.length; meetingtimes++) {
        
        if(currentmeetingendtime<sortedmeetings[meetingtimes][meetingstarttime]) return console.log('cant attend all meetings');

        currentmeetingendtime=sortedmeetings[meetingendtime][meetingendtime]
        
    }

    console.log('can attend all available meetings');
}

function meetingroomsII(meetings){
    if(meetings.length===1) return console.log(meetings.length);

    let sortedmeetings=meetings.sort((a,b)=>a[0]-b[0])
    console.log(sortedmeetings);
    let meetingrooms= [sortedmeetings[0][1]]
   
  
    for (let meetingtimes = 1; meetingtimes < sortedmeetings.length; meetingtimes++) {
        
       let[starttime,endtime]=[...sortedmeetings[meetingtimes]]
       let earliestavailableroom=Math.min(...meetingrooms)
    

       if(earliestavailableroom>starttime){
        meetingrooms.push(endtime)
        console.log('meeting rooms:',meetingrooms);
       }else{
        meetingrooms[meetingrooms.indexOf(earliestavailableroom)]=endtime
       }
        
    }

    console.log('number of rooms to accomodate all meetings: ',meetingrooms.length);
}



function firstuniquechar(s){

    if(s.trim().length===0)return console.log('empty string');

    let charmap={}
    let allunique=[]
    for(char of s){
       if(charmap[char]===undefined){

           charmap[char]=true
       }else{
        charmap[char]=false
       }

        
};

    // console.log(charmap);
    for(char of s){

        if(charmap[char]==true) allunique.push(char)

    }
    if(allunique.length==0) return console.log('no unique chars in string');
    if(allunique.length>0) return console.log('array of all unique chars:',allunique);
}


function chunked(nums,size) {
    if(nums.length<size) return console.log('size is greater than array');
    // get the modulus of the array
   
   
    let chunks=[]
    let mainarray=[]
    counter=0



    for ( num of nums) {
        counter++
        chunks.push(num)
        if(counter%size==0) counter=0,mainarray.push(chunks),chunks=[]
        
        
    }

    if(chunks.length>0)mainarray.push(chunks)

    return console.log(mainarray);
} 
    
function trilargest(nums){
    if(nums.length<3) return console.log('array smaller than 3');

    let triple= new Array(3)

    for (const num of nums) {
        
        if(!triple[0]||triple[0]<num){

            triple[2]=triple[1]
            triple[1]=triple[0]
            triple[0]=num
        }     
        else  if(!triple[1]||triple[1]<num){
  
            triple[2]=triple[1]
            triple[1]=num
        }
             
        else  if(!triple[2]||triple[2]<num){
            triple[2]=num
        }


    }

    return console.log(triple);
}

//chunked([1,1,2,2,3,3,4,5,6,7,7,8,9,0,8,7],10)
trilargest([100,2,30,4,51,6,7])

// firstuniquechar('sdwefdfdrewswerfgtyh')
// firstuniquechar('')
// firstuniquechar('sdwefdfdrewswer')
// meetingroomsI([[6,8],[1.3],[2,3],[4,5]])
//meetingroomsII([[6,8],[1,3],[3,12],[4,15],[2,3],[4,5]])
//meetingroomsII([[6,8],[1,3],[4,5]])