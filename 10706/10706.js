//defined operation function by using this function we can do any operation like add subtract
function operationFunction(func) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        //input can be vary
        var result = func.apply(void 0, args);
        //displaying the result
        console.log("Calling function ".concat(func.name, " with arguments: ").concat(args.join(', '), " = ").concat(result));
        return result;
    });
}
// Defined Add function
var add = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
};
// Defined Subtract function
var subtract = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc - curr; });
};
// Apply operationFunction to add and subtract functions
var displaySum = operationFunction(add);
var displayDifference = operationFunction(subtract);
// Storing value from function
var AddedValue = displaySum(3, 5); // Output: Calling function add with arguments: 3, 5, 5 = 13
var AddedValue = displaySum(3, 5, 8); // Output: Calling function add with arguments: 3, 5, 5 = 13
var differenceValue = displayDifference(10, 2, 7); // Output: Calling function subtract with arguments: 10, 7 = 3
