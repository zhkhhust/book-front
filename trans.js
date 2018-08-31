var asch = require('etm-js');   

var dappid = "d71f5e55624ad4e98f5c4e9ad3ba5cf611cc87b558973d0e3fee67f7b5728cdc";
var currency = "XAS";
var amount = 1000*100000000 ;
var secret = "toss snake silver call panther tiny day media quiz buzz depart recycle";
var secondSecret = "";
var transaction = asch.transfer.createInTransfer(dappid, currency, amount, secret, secondSecret || undefined);

console.log(JSON.stringify({transaction}));