function tradestock(stocks){

    if(stocks.length<2) return console.log('no stocks to trade');
    let buystock=stocks[0]
    stocks[0]=0
    bestprofit=0
    for (let stockindex = 1; stockindex < stocks.length; stockindex++) {
       if(buystock>stocks[stockindex])
       {
        buystock=stocks[stockindex]


       }else{
        bestprofit=Math.max(bestprofit,(stocks[stockindex]-buystock))

        console.log('best profit: ',bestprofit);
       }
        
    }return console.log('bestprofit realized: ',bestprofit);
}

tradestock([35,30,25,22,21,13,50])