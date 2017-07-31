var dice = process.argv.slice(2);
function rollDice (dice) {
var total = [];
   for (var i = 0; i < dice; i++) {
     var randomNum = (" " + Math.floor(Math.random()*6));
    total.push(randomNum);

    }
return total.join(",");
}

console.log(rollDice(dice));
