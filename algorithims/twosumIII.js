/**
 * Question:
Design and implement a TwoSum class. It should support the following operations: add
and find.
add(input) – Add the number input to an internal data structure.
find(value) – Find if there exists any pair of numbers which sum is equal to the value.
For example,
add(1); add(3); add(5); find(4)  true; find(7)  false

Solution used:
1. add – O(n) runtime,
2. find – O(1) runtime,
3. O(n2) space – Store pair sums in hash table:

We could store all possible pair sums into a hash table. The extra space needed is in the
order of O(n2). You would also need an extra O(n) space to store the list of added
numbers. Each add operation essentially go through the list and form new pair sums that
go into the hash table. The find operation involves a single hash table lookup in O(1)
runtime.
This method i
 */

class twosum{
    constructor(){
        this.stack=[]
        this.hashtable={}
    
    }

    get stacksize(){
        return this.stack.length
    }
    add(value){
        if(this.stacksize==0) return this.stack.push(value)
        let counter=-1

        this.stack.push(value)
        while (counter<this.stacksize) {
            counter++
           let currentvalue=this.stack[counter]

            for(let i=0;i<this.stack.length;i++){

                if(i!==counter) {

                    let compliment= currentvalue+this.stack[i]

                    if(this.hashtable[compliment]){
                        this.hashtable[compliment].push([counter,i])

                    }else{
                        this.hashtable[compliment]=[[counter,i]]
                    }

                }
            }

            if(this.hashtable['NaN']) delete this.hashtable['NaN']
            
        }

    }
    find(value){

    this.hashtable[value]!==undefined ? (console.log(value,'is at indexes: ',this.hashtable[value][0]) ):console.log (value,'not found ')
   
    }

    viewhashtable(){
        console.log(this.hashtable,this.stack);
    }
}

// const Tsum=new twosum()
// console.log(Tsum.stacksize);
// Tsum.add(1)
// Tsum.add(2)
// Tsum.add(3)
// Tsum.add(4)
// Tsum.add(5)
// Tsum.add(6)
// Tsum.add(7)
// // Tsum.viewhashtable()
// Tsum.find(4)
// Tsum.find(7)



//self test create twosum class to add find a target value


class TwoSumII{

    constructor(){
        this.stack=[]
        this.lookup={}
    }

    add(value){
        //guard clause for in values only
        if(isNaN(value)==true) return console.log('input should be a number');
        //guard clause for int string values 
        value=parseInt(value)
         const valueindex=  this.stack.indexOf(value)
        if(valueindex==-1)  this.stack.push(value)
        this.addtomap(value)

    }


    //issue with the look up function create combination for all sam totals
    addtomap(value){

        //  initial setup 
           if(!this.lookup[value]) this.lookup[value]=[]
      
      

               
               
                for(let i=0;i<this.stack.length;i++){
                    let currentint= this.stack[i]
                    if(currentint==value) continue
                    let compliment=value-currentint
                    let indexofcompliment=this.stack.indexOf(compliment)
                    console.log(indexofcompliment);
                    if(this.lookup[value].length>0) break
                    if(indexofcompliment!=-1&&indexofcompliment!=i)this.lookup[value].push([i,indexofcompliment])
                }
               
    

    }

    viewstack(){
        return console.log(this.lookup,this.stack);
    }

    find(value){

        if(!this.lookup[value]) return console.log(undefined);
        if(this.lookup[value].length==0) return console.log([]);
        return console.log(this.stack,this.lookup[value][0]);
    }
}


const TsumII=new TwoSumII()

TsumII.add(1)
TsumII.add(2)

TsumII.add(3)
TsumII.add(4)
TsumII.add(6)
TsumII.viewstack()

TsumII.find(5)
TsumII.find(6)
TsumII.find(7)
