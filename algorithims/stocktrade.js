function tradestock(stocks){

    if(stocks.length<2) return console.log('no stocks to trade');
    let buystock=stocks[0]
    // stocks[0]=0
    bestprofit=0
    for (let stockindex = 1; stockindex < stocks.length; stockindex++) {
       if(buystock>stocks[stockindex])
       {
        buystock=stocks[stockindex]


       }else{
        bestprofit=Math.max(bestprofit,(stocks[stockindex]-buystock))

       // console.log('best profit: ',bestprofit);
       }
        
    }return console.log('bestprofit realized: ',bestprofit);
}

//tradestock([35,30,25,22,21,13,50])

//tradestock([1, 6, 7, 9])
//tradestock([1, 5, 3, 2])


// revising stock trade algorithim

function tradestockI(stocks){

    let buystock=stocks[0]
let profit=0
    for(i=1;i<stocks.length;i++){
        let currentstock=stocks[i]
     console.log(buystock,currentstock);
if(buystock>currentstock){
    buystock=currentstock
}else{
    profit=Math.max(profit,(currentstock-buystock))
}
    }

    console.log('stock profit: ',profit);
}

//tradestockI([35,30,25,22,21,13,50])
tradestockII([35,30,25,22,21,13,10])

function tradestockII(stocks) {
    
    let initialstock=stocks[0]
    let profit=0

    for (let i = 0; i < stocks.length; i++) {
        let currentdaystock=stocks[i]

        if(initialstock>currentdaystock){

            initialstock=currentdaystock
        }else{
            profit=Math.max(profit,(currentdaystock-initialstock))

        }
        
    }

    return console.log(profit);
}