//define(function () {
var Calc = {
    numberStack: [],
    calcResult: 0,

    push: function (num) {
        this.numberStack.push(parseInt(num));
    },

    add: function () {
        this.calcResult = 0;
        for (var i = 0; i < this.numberStack.length; i++) {
            this.calcResult += this.numberStack[i];
        }
    },

    result: function () {
        return this.calcResult;
    }
};
//});


