function fizzbuzz(arr){

    if(!arr.length) return console.log('array is empty');
    for([index,value]of arr.entries()){

       

            if(value%3===0)arr[index]='fizz'
            if(value%5===0)arr[index]='buzz'
            if(value%5===0 && value%3===0)arr[index]='fizz buzz'
        
    }

    return console.log(arr);
}
fizzbuzz([1,2,3,4,5,6,'d','d','a',55,42,45])