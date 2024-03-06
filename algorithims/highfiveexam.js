/**
 * given the score of different students "SCORECARD" where SCORECARD[i]=[ID,Score] 
 * where the id is a student's id and score is subject score calculate each students top 5 
 * average
 * return the answer as an array of pairs results where the result [j]=[id,topfiveaverage]
 * represent sort result in incereasing order by id
 * 
 * EDGE CASE:we have to factor in the number of students which is unkown
 * 
 * possible questions to ask:
 * 1.is number of student known? the answer will determine how to go about creating the algorithim 
 * (personally did with unknown students abit harder) 
 * 2. are there students with less scores than the average divider eg if the mean is 5 subjects is there a student with less than 
 *    subjects
 * 
 * time complexity: Big O(n) space complexity: Big O(n)
 */


//this method uses a hashmap wich will perform better than using an array
// topfiveaverage([[1,60],[2,75],[2,50],[1,89],[1,76],[2,76],[2,90],[2,60],[1,43],[1,67],[1,44],[2,87],[2,92]])
function topfiveaverage(results){

// let resultscopy=results.sort((a,b)=>a[0]-b[0])
let sortedresults={}
// let students=[...new Set(results.map(s=>s[0]))]
for (let i = 0; i < results.length; i++) {
    
    let currentresult=results[i]

    if(sortedresults[currentresult[0]]){
        sortedresults[currentresult[0]].push(currentresult[1])
        sortedresults[currentresult[0]]= sortedresults[currentresult[0]].sort((a,b)=>b-a)

         if(sortedresults[currentresult[0]].length>5)sortedresults[currentresult[0]]=sortedresults[currentresult[0]].splice(0,5)

        
    }else{

        sortedresults[currentresult[0]]=[currentresult[1]]

    }

    
}

// console.log('before: ',sortedresults);
results=[]
for (let student in sortedresults) {

    let studentavg=Math.floor((sortedresults[student].reduce((a,b)=>a+b))/sortedresults[student].length)
    sortedresults[student]= []
    sortedresults[student].push(studentavg)

    results.push([student,studentavg])
   
}

// console.log('after: ',sortedresults,results);
console.log('function I: ',results);




}




// second function uses an array though performance will be hit due to read time when looking for a particular student
topfiveaverageII([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])
topfiveaverageII([[1,91],[1,92],[2,93],[2,97],[1,60],[1,90],[2,77],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])

function topfiveaverageII(results) {

    let meanscore=[]

    for (let i = 0; i < results.length; i++) {
       
        let currentstudents=results[i]
        let students=meanscore.map(s=>s[0])
        if(students.includes(currentstudents[0])){
            let studentindex=students.indexOf(currentstudents[0])
            meanscore[studentindex][1].push(currentstudents[1])
            meanscore[studentindex][1].sort((a,b)=>b-a)
            if( meanscore[studentindex][1].length>5) meanscore[studentindex][1]= meanscore[studentindex][1].splice(0,5)
            
        }else{
            meanscore.push([currentstudents[0],[currentstudents[1]]])
        }
        
    }

    meanscore.forEach(student => {
        let studentavgscore=Math.floor((student[1].reduce((a,b)=>a+b))/student[1].length)
        student[1]=studentavgscore
        // student[1]=studentavgscore
        
    });

    console.log('function II: ',meanscore);
    
}

//self test 1 of highfive exam question
topfivetestI([[1,91],[1,92],[2,93],[2,97],[1,60],[1,90],[2,77],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])

function topfivetestI(results) {
//first sort results with the ids
    results=results.sort((a,b)=>a[0]-b[0])
    // console.log(results);
    resultsmap={}
    resultoutput=[]
    for(i=0;i<results.length;i++){
        let [id,result]=[...results[i]]

        if(!resultsmap[id]){
            resultsmap[id]=[result]
        }else{
           resultsmap[id].push(result)
      
       if(resultsmap[id].length>5)  {
         resultsmap[id]=resultsmap[id].sort((a,b)=>b-a)
         resultsmap[id].pop()
        
        }
        }


    }


    for (let id in resultsmap) {
       
        let resulttotal=resultsmap[id].reduce((total,curr)=>total+curr)
        let bestavgscore=Math.floor(resulttotal/resultsmap[id].length)
        resultsmap[id]=[bestavgscore]
        resultoutput.push([id,bestavgscore])
    }
    console.log(resultsmap,resultoutput);
    
}