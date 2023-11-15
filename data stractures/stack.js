/*
A STACK IS AN ABSTRACT DATA STRACTURE DEFINED BY ITS BEHAVIOUR RATHER THAN IT BEING A MATHEMATRICAL MODEL
WE CAN CREATE A STACK FROM EXTENDING FUNCTIONANLITY OF AN ARRAY
uses LIFO (last in first out) principle
real life examples of a stack a stack of plates 
main operations are push and pop
use case:
browser hsitory tracking
undo operation
call stack used in js runtime

*/

class Stack{
    constructor(){
        this.stack=[]
    }

    stackadd(element){
        this.stack.push(element)
        return console.log('stack added: ',this.stack);
    }

    stackremove(){
        const elemnenttoremove = this.stack[this.stack.length-1]
        this.stack.pop()
        return console.log('element removed from stack: ',elemnenttoremove);
    }

    stackpeek(){
        return console.log(this.stack[this.stack.length-1])

    }

    stackempty(){
        let isempty
        if(this.stack.length==0) isempty= true
        if(this.stack.length>0)  isempty= false

        return console.log('stack is empty: ',isempty)

    }
}

module.exports=Stack