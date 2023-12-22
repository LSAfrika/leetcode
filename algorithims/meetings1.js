/**
 * the algotithim below is used to see if n individual can attend all meetings set within a specific day
 * first we sorth all mettings in regards to start time
 * then we set our intial meeting to the first element in the sorted meetings
 * from there we itterate through the array while chekcing if the first meeting's end time is greater than the next meetings start time'
 * if the condition is met that the end time of previous meeting is greater than that of the next meeting start time we return false
 * if condition is not met then we return true
 */

function meetingattendanceI(meetings){

    meetings.sort((a,b)=>a[0]-b[0])
    // console.log('sorted meetings: ',meetings);

    let initialmeeting=meetings[0]
let endtime=1
let starttime=0
    for ( meetingsindex = 1; meetingsindex < meetings.length; meetingsindex++) {
        
        if(initialmeeting[endtime]>meetings[meetingsindex][starttime])return console.log('not possible to attend all meetings');
        initialmeeting=meetings[meetingsindex]
        
    }

    console.log('all meetings are attendable');

}

meetingattendanceI([[1,5],[8,10],[6,8]])
meetingattendanceI([[1,5],[3,7],[2,8],[7,10],[4,6]])