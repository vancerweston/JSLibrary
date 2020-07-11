export let hi = 'Hello from myMath';

export let myMath = (function() {
    return {
        add: function(num1, num2) {
            return num1 + num2;
        },
        subtract: function(num1, num2) {
            return num1 - num2;
        }
    }
})();