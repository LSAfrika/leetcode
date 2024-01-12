
// Question:
// Design a stack that supports push, pop, top, and retrieving the minimum element in
// constant time.

// push(x) – Push element x onto stack.
// pop() – Removes the element on top of the stack.
// top() – Get the top element.
// getMin() – Retrieve the minimum element in the stack.
// Hints:
//  Consider space-time tradeoff. How would you keep track of the minimums using
// extra space?
//  Make sure to consider duplicate elements.




class Stack{
    constructor(){
        this.stack=[]
        this.minstack=[]
        this.size=0
        this.minval=0
    }

    push(value){
        if(this.size==0){
            this.stack.push(value),
            this.minstack.push(value)
            this.minval=value
          
        }
        else{
            this.stack.push(value)


            if(value<this.minval){
                this.minstack.push(value)
                this.minval=value

            }else{
                this.minstack.push(this.minval)
            }
         }
          console.log("min: ",this.minstack);
        // console.log("stack: ",this.stack);
        this.size++
    }

    top(){
        if(this.size==0) return console.log('empty');
        return console.log('top element: ',this.stack[this.stack.length-1]);
    }
    get stacksize(){
        return console.log('stack size:',this.size);
    }

    getmin(){
        if(this.size==0) return console.log('empty');
        console.log('min val: ',this.minval);

    }

    pop(){
        if(this.size==0) return console.log('empty');

        const pop= this.stack.pop()
        const minpop= this.minstack.pop()
        this.minval=this.minstack[this.minstack.length-1]
        this.size--
        console.log(this.minstack);
        console.log(this.stack);
        console.log(pop,' removed from stack');

    }

    minvalue(){
        console.log('least value: ',this.minval);
    }
}


const newstack= new Stack()

newstack.getmin()
newstack.push(5)
newstack.push(4)
newstack.push(6)
newstack.push(1)
newstack.push(6)
newstack.push(6)
newstack.pop()
newstack.pop()
newstack.pop()
newstack.stacksize
newstack.getmin()

