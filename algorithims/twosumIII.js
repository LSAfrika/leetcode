/**
 * Question:
Design and implement a TwoSum class. It should support the following operations: add
and find.
add(input) – Add the number input to an internal data structure.
find(value) – Find if there exists any pair of numbers which sum is equal to the value.
For example,
add(1); add(3); add(5); find(4)  true; find(7)  false
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

const Tsum=new twosum()
console.log(Tsum.stacksize);
Tsum.add(1)
Tsum.add(2)
Tsum.add(3)
Tsum.add(4)
Tsum.viewhashtable()
Tsum.find(8)
Tsum.find(7)





