/**
 * thsi is an algoriyhim use to chunk an array to sub arrays of a given size
 * eg (input) [1,2,3,4,4,5,6,6,7]
 *   || ||       chunks of 3   || ||
 *   \/ \/                     \/ \/
 * (output) [[1,2,3],[4,4,5],[6,6,7]]
 */

function chunkarray(array,target) {

    if(target<1||target>array.length)return console.log('target out of bounds');
    let chunked=[]
    
    let validchunks=[]
    let unallocated=[]
    const modulus=array.length%target
    if(modulus!=0) unallocated=array.splice(array.length-modulus)

  
   for (let i = 1; i <= array.length; i++) {

        validchunks.push(array[i-1])

        if(i%target==0) chunked.push(validchunks),validchunks=[]


   }


   if(unallocated.length>0)chunked.push(unallocated)
    console.log(chunked);
    
}

chunkarray([1,2,3,4,5,6,7,8,9,0,12,23,12,4,5,6],3)