define(['../app/calc'], function (calc) {
    addStepDefinitions(function (scenario) {
        // Provide a custom World constructor. It's optional, a default one is supplied.
        scenario.World = function (callback) {
            callback();
        };

        scenario.Given(/^I have entered (\d)+ into the calculator$/, function (number, callback) {
            calc.push(number);

            callback();
        });

        scenario.When(/^I press add$/, function (callback) {
            calc.add();
            callback();
        });

        scenario.Then(/^the result will be (\d)+$/, function (expected, callback) {
            assert(calc.result() === expected);

            callback();
        });

    });
});