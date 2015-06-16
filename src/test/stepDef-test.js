//define(['../app/calc'], function (calc) {
addStepDefinitions(function (scenario) {
    // Provide a custom World constructor. It's optional, a default one is supplied.
    scenario.World = function (callback) {
        callback();
    };

    scenario.Given(/^I have entered (\d)+ into the calculator$/, function (number, callback) {
        Calc.push(number);

        callback();
    });

    scenario.When(/^I press add$/, function (callback) {
        Calc.add();
        callback();
    });

    scenario.Then(/^the result will be (\d)+$/, function (expected, callback) {
        console.log('result is:' + Calc.result());
        if (Calc.result() !== parseInt(expected)) {
            console.log('expected is' + expected);
            throw 'Assertion Failed';
        }

        callback();
    });

});
//});