var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define a generic function to update an object with type safety
function updateObject(obj, key, value) {
    // Create a copy of the original object 
    var copyObj = __assign({}, obj);
    // Update the specified key with the new value
    copyObj[key] = value;
    // Return the CopyObj object with the same type as the original
    return copyObj;
}
var obj = { a: 1, b: 'hello', c: true };
//storing the value in updated
var updated = updateObject(obj, 'b', 'world');
//display the updated result
console.log(updated);
