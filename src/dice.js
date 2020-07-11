export let dice = (function() {
    return {
        rollDie: function(dieType) {
            return Math.floor(Math.random() * Math.floor(dieType)) + 1;
        },
        rollDice: function(numOfDie, dieType) {
            let result = [];
            for (let i = 0; i < numOfDie; i++) {
                result.push(dice.rollDie(dieType));
            }
            return result;
        },
        rollStats: function() {
            let stats = [];
            let diceResults =[];
            let statScore;
            for (let i = 0; i < 6; i++) {
                diceResults = dice.rollDice(4, 6);
                diceResults = diceResults.sort(function(a,b){return b - a});
                diceResults.pop();
                statScore = diceResults[0] + diceResults[1] + diceResults[2];
                stats.push(statScore);
            }
            return stats;
        }
    }
})();