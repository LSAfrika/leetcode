// function twosum(nums,target) {
    
//     if(nums.length<2) return console.log('array too small');
//     let store={ }

//     for (let i = 0; i < nums.length; i++) {
//      //console.log(store);
//        if(store[nums[i]] !=undefined)  return  console.log(store[[nums[i]]],',',i)

//             //meta data just to see what the map contains upon getting value
//             // store[target-nums[i]]=i
//           //   console.log(nums[i]);
           
             
            

//         store[target-nums[i]]=i
        
//     }

//     return console.log(-1);
// }

function twosum(nums,target) {

  if(nums.length<2)return console.log('array short');

  let summap={}

  for(i=0;i<nums.length;i++){
    let currentnum=nums[i]
    let compliment=target-currentnum
console.log('map: ',summap );
    if(summap[compliment]!==undefined){
      return console.log(summap[compliment],i);
    }
    else{
      summap[currentnum]=i
    }
  }

  return console.log(target,' has no indexes');
  
}

// twosum([1,4,5,3,6,7,8,2],9)

// TEST 1
function twosumtestI(nums,target){

  let complimentmap=new Map()

  for(i=0;i<nums.length;i++){
    let currentnum=nums[i]
    let compliment=target-currentnum

    if(complimentmap.has(compliment)) return console.log(complimentmap.get(compliment),i);
    complimentmap.set(currentnum,i)
  }
 
  console.log('no sum total found for ',target,' in ',nums);
}


twosumtestI([1,4,5,3,6,7,8,2],8)


twosumII([1,4,5,3,6,7,8,2],90)

function twosumII(nums,target) {

  let targetmap=new Map()

  for(i=0;i<nums.length;i++){
    let currentnum=nums[i]
    let compliment=target-currentnum


    if(targetmap.has(compliment))return console.log(targetmap.get(compliment),i);
    targetmap.set(currentnum,i)
  }

  console.log(target,' cant be found in ',nums);
  
}




