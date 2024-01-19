function stairs(n){
    if(n===2) return console.log(2);
    let steps=[1,2]

for (let i = 2; i <n; i++) {

    steps[i]=steps[i-1]+steps[i-2]
        
    }

    return console.log(steps,steps[n-1]);

}

stairs(7)
climbingtest(7)
function climbingtest(n){

    let steps=[1,2]

    for(step=2;step<n;step++){
        steps[step]=steps[step-1]+steps[step-2]
    }

    console.log('there are ',steps[steps.length-1],' ways to climb ',n,' stairs');

}