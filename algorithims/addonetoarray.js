
/**
 * 
 * @param {*} nums 
 * @returns 
 * the below alogorithim adds one to last index if value is greater than 10 
 * we carry forward to the next digit 
 * eg [1,2,3] + 1=[1,2,4]
 *    [1,9,9] + 1=[2,0,0]
 * 
 * added a guard clause for last inde if its value is 10
 */




function addone(nums){
    

    let lastindex=nums.length-1
    let lastindexvalue= nums[lastindex]+1
    if(lastindexvalue==10){

        while(lastindexvalue>=10){
            
         
            if(nums[0]==10) {
                nums[0]=0
                nums.unshift(1)
                return console.log(nums);
            } 

            lastindexvalue=lastindexvalue-10
            nums[lastindex]=lastindexvalue
            lastindex--
            lastindexvalue=nums[lastindex]+1
            nums[lastindex]=lastindexvalue
            // console.log(decrement,'last reset',lastindexvalue);
        


            
        }
        return console.log('grest 10 ',nums);

    }else{
        nums[lastindex]=lastindexvalue
    
        return console.log('less 10',nums);
    }



}


// atempt 2 to retest skill
function add(nums){

   

    for(i=nums.length-1;i>=0;i--){

        // console.log('current index:', i);
        let sum= nums[i]+1

   

        if(sum==10){
          
            nums[i]=0

            if(nums[0]==0) nums.unshift(1)
          

        }else{

            nums[i]=sum

            break
        }

        // console.log(nums[i]);

    }

    console.log(nums);
}

add([9,9,9])
 add([1,9,8])
 add([1,6,9,9])