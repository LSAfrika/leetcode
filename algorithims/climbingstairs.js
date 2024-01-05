function stairs(n){
    if(n===2) return console.log(2);
    let steps=[1,2]

for (let i = 2; i <n; i++) {

    steps[i]=steps[i-1]+steps[i-2]
        
    }

    return console.log(steps,steps[n-1]);

}

stairs(7)