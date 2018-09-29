// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var str = {};  
    var quotient = [];
    var i;
    var arr = [50, 25, 10, 5, 1];

    if(currency === 0 || currency < 0){
        return str;
    }

    if(currency > 10000){
        str = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return str;
    }
    
    for(i=0; i<arr.length; i++){
        quotient[i] = Math.floor(currency/arr[i]);
        currency = currency % arr[i];
    }

    str = {"H": quotient[0], "Q": quotient[1], "D": quotient[2], "N": quotient[3], "P": quotient[4]};

    for(var key in str){
        if (str[key] === 0) delete str[key];
    }
    
    return str;
}
