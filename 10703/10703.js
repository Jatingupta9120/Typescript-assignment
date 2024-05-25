// Define a function that maps the values of an object and returns a new object 
function mapObject(obj, callback) {
    var mappedObj = {};
    // Iterate over the keys of the object
    for (var key in obj) {
        // Check if the property actually belongs to the object
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Extract the value for the current property
            var value = obj[key];
            // Apply the callback function to the value
            var newValue = callback(value);
            // Assign the new value to the property in the mappedObj
            mappedObj[key] = newValue;
        }
    }
    return mappedObj;
}
// Define an original object
var originalObject = { a: 1, b: 2, c: 3 };
// Map the original object values to string representation
var mappedObject = mapObject(originalObject, function (value) { return value.toString(); });
// Log the mapped object
console.log(mappedObject);
//define an original object
var originalObjectWithNested = { a: 1, b: { c: "hello" } };
// Map the original object values to string representation
var keyPreservedObject = mapObject(originalObjectWithNested, function (value) { return value.toString(); });
console.log(keyPreservedObject);
// Output: { a: '1'; b: { c: 'hello' }; } (type: { a: string; b: { c: string }; })
