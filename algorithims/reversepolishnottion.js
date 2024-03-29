// Question:
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
// Some examples:
// ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
// ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
// Example Questions Candidate Might Ask:
// Q: Is an empty array a valid input?
// A: No.

function polishnotationeasy(nums) {

    let result=[]
    let arithmeticmap={
        '+':'+',
        '-':'-',
        '/':'/',
        '*':'*',
    }

    for(num of nums){

        if(!!parseInt(num)){
            result.push(parseInt(num))
        }else{
            if(arithmeticmap[num]=='+'){
                let sum=result[result.length-2]+result[result.length-1]
                result.pop()
                result.pop()
                result.push(Math.floor(sum))

            }
            if(arithmeticmap[num]=='-'){
                let sum=result[result.length-2]-result[result.length-1]
                result.pop()
                result.pop()
                result.push(Math.floor(sum))

            }
            if(arithmeticmap[num]=='/'){
                let sum=result[result.length-2]/result[result.length-1]
                result.pop()
                result.pop()
                result.push(Math.floor(sum))

            }
            if(arithmeticmap[num]=='*'){
                let sum=result[result.length-1]*result[result.length-2]
                result.pop()
                result.pop()
                result.push(Math.floor(sum))

            }
        }

    }

    console.log(result[0]);
    
}




polishnotationeasy(['1','2','3','+','-'])
polishnotationeasy(["2", "1",'4', "+",'*', "3", "*",])
polishnotationeasy(["4", "13", "5", "/", "+"])




function polishnotationhard(nums){
    
    let arithmeticmap={
        "-":"-",
        "+":"+",
        "*":"*",
        "/":"/"
        
    }

    for(index=0;index<nums.length;index++){

        let num=nums[index]
        if(!!parseInt(num)){
            nums[index]=parseInt(num)
    

        }else{

         
            if(arithmeticmap[num]=='+'){
            

                let total=nums[index-2]+nums[index-1]
                nums[index-2]=Math.floor(total)
                nums.splice(index-1,2)
                index=index-2
             

            }
            if(arithmeticmap[num]=='-'){

              
                let total=nums[index-2]-nums[index-1]
                nums[index-2]=Math.floor(total)
                nums.splice(index-1,2)
                index=index-2

                

            }
            if(arithmeticmap[num]=='/'){
                let total=nums[index-2]/nums[index-1]
                nums[index-2]=Math.floor(total)
                nums.splice(index-1,2)
                index=index-2

            }
            if(arithmeticmap[num]=='*'){
                let total=nums[index-2]*nums[index-1]
                nums[index-2]=Math.floor(total)
                nums.splice(index-1,2)
                index=index-2

            }

        }
    }


    return console.log('solution: ',nums[0]);
}

// polishnotationhard(['1','2','3','+','+'])
// polishnotationhard(["2", "1", "+", "3", "*"])
// polishnotationhard(["4", "13", "5", "/", "+"])


// SELF TEST POLISH NOTATION

function polishnotationtest(nums){
    let arithmeticmap={'+':'+','-':'-','*':'*','/':'/',}
    let numstack=[]
    let sum=0
    for (num of nums){

        if(!!parseInt(num)){
            numstack.push(parseInt(num))
            console.log(num,numstack);

        }else{
           if(arithmeticmap[num]=='+'){ 
            if(numstack.length==1) return console.log(sum+numstack[numstack.length-1])

            sum+=numstack[numstack.length-2]+numstack[numstack.length-1],
            numstack.pop(),
            numstack.pop(),
            console.log('sum at +',sum,numstack);}
           if(arithmeticmap[num]=='-') {
            if(numstack.length==1) return console.log(sum-numstack[numstack.length-1])
            sum+=numstack[numstack.length-2]-numstack[numstack.length-1],
            numstack.pop(),
            numstack.pop(),
            console.log('sum at -: ',sum);}
           if(arithmeticmap[num]=='/') {
            if(numstack.length==1) return console.log(Math.floor(sum/numstack[numstack.length-1]))

            sum+=Math.floor(numstack[numstack.length-2]/numstack[numstack.length-1]),
            numstack.pop(),
            numstack.pop(),
            console.log('sum at /: ',sum);
        }
           if(arithmeticmap[num]=='*') {
            if(numstack.length==1) return console.log(sum*numstack[numstack.length-1])

            sum+=numstack[numstack.length-2]*numstack[numstack.length-1],
            numstack.pop(),
            numstack.pop(),
            console.log('sum at *: ',sum);}
        }
    }

    return console.log('even array: ',sum);
}

// polishnotationtest(['1','2','3','3','+','+'])
// polishnotationtest(["2", "1", "+", "3", "*"])

// polishnotationtesthard(['1','2','3','+','+'])
// polishnotationtesthard(['1','2','3','+','+'])

function polishnotationtesthard(nums){
    let arithmeticmap={'+':'+','-':'-','*':'*','/':'/',}

    for(i=0;i<nums.length;i++){
        if(!!parseInt(nums[i])==true) continue

        let arithmetic=nums[i]
        if(arithmeticmap[arithmetic]=='+'){
            
            nums[i]=parseInt(nums[i-2])+parseInt(nums[i-1])
            nums.splice(i-2,2)
            console.log('add nums splice: ',nums);
            i-=2

        }
        if(arithmeticmap[arithmetic]=='-'){
            nums[i]=parseInt(nums[i-2])-parseInt(nums[i-1])
            nums.splice(i-2,2)
            i-=2

        }   
        if(arithmeticmap[arithmetic]=='*'){
            nums[i]=parseInt(nums[i-2])*parseInt(nums[i-1])
            nums.splice(i-2,2)
            i-=2
            
        }   
        if(arithmeticmap[arithmetic]=='/'){

            nums[i]=Math.floor(parseInt(nums[i-2])/parseInt(nums[i-1]))
            nums.splice(i-2,2)
            i-=2

            
        }
      
    }
    console.log(nums[0]);
}
