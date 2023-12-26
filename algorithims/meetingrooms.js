
// /** a medium level meeting algorithim used to find out how many room need be created 
//  *  to host scheduled meetings
//  *  1. sort the given time schedule
//  *  2. create an array to hold room required
//  *  3. loop through the meeting schedule ln 20
//  *  4. while looping extract the start and endtimes of current itteration ln 20
//  *  5. create a variable to check the least value in the rooms array  ln 24
//  *  6. do a check of current itteration start time compared to the least value in the rooms array ln 28
//  *     if the start time is less than least time from earliestroom available we push the endtime of current
//  *     itteration to roomtime array
//  *  7. if the start time is greater than earliestroom availabe we get the index of current  earliestroom available and replace 
//  *     it with the endtime of the current itteration
//  * 
//  */
// function meetingrooms(meetings){
    
//     if(meetings.length<2) return console.log('1 meeting room required');

//     meetings.sort((a,b)=>a[0]-b[0])

//     let roomtime=[meetings[0][1]]
   


    

//     for(meetingindex=1;meetingindex<meetings.length;meetingindex++){

//     let[starttime,endtime]=[...meetings[meetingindex]]

//     let earliestavailableroom=Math.min(...roomtime)

//     if (starttime<earliestavailableroom) {
//         roomtime.push(endtime)
        
//     }else{
//         roomtime[roomtime.indexOf(earliestavailableroom)]=endtime
//     }
//     }

//     console.log('sorted meetings by start time: ',meetings)
//     console.log('rooms created ',roomtime.length)
    
// }

meetingroomsII([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
meetingroomsII([[13,14],[1,5],[6,7],[8,9],[10,12]])
meetingroomsI([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
meetingroomsI([[1,5],[6,7],[8,9],[10,12],[13,14]])


function meetingroomsII(meetingtimes){
    if(meetingtimes.length==1)return console.log('no of meeting rooms: ',meetingtimes.length);
meetingtimes.sort((a,b)=>{return a[0]-b[0]})
//get the endtime of earliest meeting 
    let rooms =[meetingtimes[0][1]]
    let starttime=0
    let endtime=1
       //  let [currentmeetingstarttime,currentmeetingendtime]=[...meetingtimes[i]]
  //  we begin at 1 since the fist meetin has been assigned to room container array
    for (let meetingindex = 1; meetingindex < meetingtimes.length; meetingindex++) {
   
        let currentmeetingstarttime=meetingtimes[meetingindex][starttime]
        let currentmeetingendtime=meetingtimes[meetingindex][endtime]
        let earliestroomavailable=Math.min(...rooms)

        if(earliestroomavailable>currentmeetingstarttime){
            rooms.push(currentmeetingendtime)
        }else{
            rooms[rooms.indexOf(earliestroomavailable)]=currentmeetingendtime
        }


    }

    return console.log('total rooms created',rooms.length);
}

function meetingroomsI(meetingtimes){
    if(meetingtimes.length<2) return console.log('can attend all meetings');

    meetingtimes.sort((a,b)=>{return a[0]-b[0]})
    let starttime=0
    let endtime=1
    let currentmeeting=meetingtimes[0]

    for (let meetingindex = 1; meetingindex < meetingtimes.length; meetingindex++) {
        
        if(currentmeeting[endtime]>meetingtimes[meetingindex][starttime]) return console.log('not possible to attend all meetings');
        currentmeeting=meetingtimes[meetingindex]
        
    }

    console.log('all meetings are attendable');
}