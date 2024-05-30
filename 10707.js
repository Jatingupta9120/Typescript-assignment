//
function Loading(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Loading...');
        var res = fn.apply(void 0, args);
        console.log('Finished loading.');
        return res;
    };
}
//defined add function
var addOperation = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log('adding...');
    return args.reduce(function (sum, num) { return sum + num; }, 0);
};
//here HOF :-function take another function as parameter
var addWithLoading = Loading(addOperation);
//display output
var res = addWithLoading(5, 3, 8);
console.log('Added res:', res);
