/**
 * given a flower bed and flowers can you plant all flowwers in a the given bed
 * flowerbed:[1,0,0,0,1]
 * number of flowers= n=1
 * 
 * no two flowers should be adjacent to one another
 * 
 * 
 */


//plantbed([1,0,0,0,1,0,0,0],2)
function plantbed(bed,flowers){
    let counter=0

   for(i=0;i<bed.length;i++){
    if(bed[i]==1) continue

    if(bed[i]==0&&bed[i-1]==0&&bed[i+1]==0){
        bed[i]=1
        flowers--
        i+=2
    }
   }

   console.log(bed,flowers==0);
}


// flowerbed([0,0,0,0,0,0,0,0,0],6)

function flowerbed(bed,flowers){
  
    
        for (let i = 0; i < bed.length; i++) {
            
        if(i==0&&bed[i]==0&&bed[1+1]==0)bed[i]=1,flowers--
        if(bed[i]!=0) continue
        //  if(bed[0]==0&&bed[1]==0) 
           
         if(bed[i-1]==0&&bed[i]==0&&bed[i+1]==0) flowers--,bed[i]=1
         //hamdle edge case of last 2 being empty pots
         if(i==bed.length-1&&bed[i]==0&&bed[i-1]==0) flowers--,bed[i]=1

         if(flowers==0) return console.log('all flowers planted: ',flowers==0,bed);
            
        }
        
    console.log('all flowers planted: ',flowers==0,'\n',bed);
}

//self test 1 on flowerbed algorithim

flowerbedtestI([0,0,0,0,0,0,0,0,0],5)

function flowerbedtestI(bed,flowers) {

for (let i = 0; i < bed.length; i++) {
  
    if(i==0&&bed[i]==0&&bed[i+1]==0) bed[i]=1,flowers--
    if(bed[i]!=0)continue

    //edge case of final port being a valid pot and flowers remaining
    if(i==bed.length-1&&bed[i]==0&&bed[i-1]==0) bed[i]=1,flowers--
    if(bed[i-1]==0&&bed[i]==0&&bed[i+1]==0){
        bed[i]=1
        flowers--
        i++
        if(flowers==0) return console.log('all flowers planted: ',flowers==0);
    }else{
        continue
    }
        
    }

    console.log(flowers==0,bed);
    
}