
/** a medium level meeting algorithim used to find out how many room need be created 
 *  to host scheduled meetings
 *  1. sort the given time schedule
 *  2. create an array to hold room required
 *  3. loop through the meeting schedule ln 20
 *  4. while looping extract the start and endtimes of current itteration ln 20
 *  5. create a variable to check the least value in the rooms array  ln 24
 *  6. do a check of current itteration start time compared to the least value in the rooms array ln 28
 *     if the start time is less than least time from earliestroom available we push the endtime of current
 *     itteration to roomtime array
 *  7. if the start time is greater than earliestroom availabe we get the index of current  earliestroom available and replace 
 *     it with the endtime of the current itteration
 * 
 */
function meetingrooms(meetings){
    
    if(meetings.length<2) return console.log('1 meeting room required');

    meetings.sort((a,b)=>a[0]-b[0])

    let roomtime=[meetings[0][1]]
   


    

    for(meetingindex=1;meetingindex<meetings.length;meetingindex++){

    let[starttime,endtime]=[...meetings[meetingindex]]

    let earliestavailableroom=Math.min(...roomtime)

    if (starttime<earliestavailableroom) {
        roomtime.push(endtime)
        
    }else{
        roomtime[roomtime.indexOf(earliestavailableroom)]=endtime
    }
    }

    console.log('sorted meetings by start time: ',meetings)
    console.log('rooms created ',roomtime.length)
    
}

meetingrooms([[10,14],[1,5],[3,4],[6,9],[10,12]])
meetingrooms([[13,14],[1,5],[6,7],[8,9],[10,12]])