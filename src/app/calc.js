define(function () {
    var numberStack = [];
    var result = 0;

    function push(num) {
        numberStack.push(num);
    }

    function add() {
        result = 0;
        for (var i = 0; i < numberStack.length; i++) {
            result += numberStack[i];
        }
    }

    function result() {
        return result;
    }
});


