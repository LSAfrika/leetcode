
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





function meetingroomsII(meetingtimes){
    if(meetingtimes.length==1)return console.log('no of meeting rooms: ',meetingtimes.length);
meetingtimes.sort((a,b)=>{return a[0]-b[0]})
//get the endtime of earliest meeting and store it in the rooms array to get number of rooms
    let rooms =[meetingtimes[0][1]]
    let starttime=0
    let endtime=1
       //  let [currentmeetingstarttime,currentmeetingendtime]=[...meetingtimes[i]]
       //  we begin at 1 since the fist meetin has been assigned to room container array
    for (let meetingindex = 1; meetingindex < meetingtimes.length; meetingindex++) {
   
        let currentmeetingstarttime=meetingtimes[meetingindex][starttime]
        let currentmeetingendtime=meetingtimes[meetingindex][endtime]
        let earliestmeetingendtime=Math.min(...rooms)

        if(earliestmeetingendtime>currentmeetingstarttime){
            rooms.push(currentmeetingendtime)
        }else{
            rooms[rooms.indexOf(earliestmeetingendtime)]=currentmeetingendtime
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

// meetingroomsII([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
// meetingroomsII([[13,14],[1,5],[6,7],[8,9],[10,12]])
// meetingroomsI([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
// meetingroomsI([[1,5],[6,7],[8,9],[10,12],[13,14]])




// revising medium meeting rooms

function meetingroomsTestI(meetings){
    meetings=meetings.sort((a,b)=>a[0]-b[0])
    let currentmeetingendtime=meetings[0][1]
    let meetingrooms=[]
    meetingrooms.push(currentmeetingendtime)

    for(meetingtimes=1;meetingtimes<meetings.length;meetingtimes++){

        let [starttime,endtime]=[...meetings[meetingtimes]]

        if(currentmeetingendtime>starttime){
            meetingrooms.push(endtime)
        }else{
            let earliestmeetingendtime=Math.min(...meetingrooms)
            let currentendindex=meetingrooms.indexOf(earliestmeetingendtime)
            meetingrooms[currentendindex]=endtime
        }

    }

    return console.log('rooms required for all meetings: ',meetingrooms.length);
}


// meetingroomsTestII([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
// meetingroomsTestII([[13,14],[1,5],[6,7],[8,9],[10,12]])
// meetingroomsTestI([[13,14],[1,5],[6,7],[8,9],[10,12]])

function meetingroomsTestII(meetings){


    if(meetings<2)return console.log('1 room created since there is only one meeting')
    meetings=meetings.sort((a,b)=>a[0]-b[0])
console.log(meetings);
    let rooms=[]
    let firstmeetingend=meetings[0][1]
    rooms.push(firstmeetingend)

    for(i=1;i<meetings.length;i++){
        let currentmeeting=meetings[i]
        let [currentstart,currentend]=[...currentmeeting]
        let shortestimeinrooms=Math.min(...rooms)
        if(currentstart<shortestimeinrooms){
            rooms.push(currentend)
        }else{
            let index=rooms.indexOf(shortestimeinrooms)
            rooms[index]=currentend

        }
    }

    console.log('rooms created: ',rooms.length);

}


//test 3
//meeting rooms easy
//allmeetingsattendable([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
//allmeetingsattendable([[1,3],[4,5],[6,9],[10,12]])

function allmeetingsattendable(meetings) {
    
    meetings=meetings.sort((a,b)=>a[0]-b[0])
console.log(meetings);
    let earliestmeeting=meetings[0]

    for (let i = 1; i < meetings.length; i++) {
       
        let currentmeeting=meetings[i]

        if(earliestmeeting[1]>currentmeeting[0])return console.log('all meetings are attendable? ',false);
        earliestmeeting=currentmeeting
        
    }

    return console.log('all meetings are attendable? ',true);
}


meetingroomscreated([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
  meetingroomscreated([[13,14],[1,5],[6,7],[8,9],[10,12]])

function meetingroomscreated(meetings) {
    meetings=meetings.sort((a,b)=>a[0]-b[0])
    let firstmeetingendtime=meetings[0][1]
    let roomscreated=[firstmeetingendtime]

    for (let i = 1; i < meetings.length; i++) {
        let [currentmeetingstarttime,currentmeetingendtime]=[...meetings[i]]

        if(firstmeetingendtime>currentmeetingstarttime){

        roomscreated.push(currentmeetingendtime)

        }else{

           roomscreated=roomscreated.sort((a,b)=>a-b)

           roomscreated[0]=currentmeetingendtime

        }
        
    }

    return console.log(roomscreated.length);
    
}

//self test 4 meetingrooms eseay medium

//easy can an individual attend all meetings given start and end time of meetings
// meetingattendanceI([[13,14],[1,5],[6,7],[8,9],[10,12]])
// meetingattendanceI([[13,14],[1,8],[7,8],[10,12]])

function meetingattendanceI(meetings) {
    if(meetings.length<1) return console.log(false);
    if(meetings.length==1) return console.log(true);
    meetings=meetings.sort((a,b)=>a[0]-b[0])
console.log(meetings);
    for (let i = 0; i < meetings.length-1; i++) {
        let currmeeting=meetings[i]
        let nextmeeting=meetings[i+1]

        if(currmeeting[1]>nextmeeting[0]) return console.log('can attend all meetings? ',false);
        
    }
    return console.log('can attend all meetings? ',true);
}

//medium meeting rooms 
//given a set of meeting times find out how many rooms need be created to accomodate all meetings

roomscreatedI([[10,14],[2,17],[1,5],[3,4],[6,9],[10,12]])
roomscreatedI([[13,14],[1,5],[6,7],[8,9],[10,12]])

function roomscreatedI(times) {
    times=times.sort((a,b)=>a[0]-b[0])
    console.log(times);
    let rooms=[times[0][1]]
     for(i=1;i<times.length;i++){
        let currentmeeting=times[i]
        let smallestroomtime=Math.min(...rooms)
        let[currentstart,currentend]=currentmeeting
        if(smallestroomtime>currentstart){
            rooms.push(currentend)

        }else{

            rooms[rooms.indexOf(smallestroomtime)]=currentend

        }
     }

     return console.log('self test 1:',rooms.length);
    
}