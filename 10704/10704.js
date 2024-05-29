//Defining arrY using TypeScript types
var array1 = [42, 'hello', true];
//Defining arrqy without TypeScript types
var array2 = [42, 'hello', true];
// Defined the Function to reverse the tuple 
function reverseTuple(tuple) {
    // Create an empty array of type T to store the reversed tuple
    var reversed = [];
    // Iterate over the elements of the tuple in reverse order
    for (var i = tuple.length - 1; i >= 0; i--) {
        // Push each element into the reversed array
        reversed.push(tuple[i]);
    }
    // Return the reversed tuple
    return reversed;
}
// Reversing the tuple with loop approach
var reversedT1 = reverseTuple(array1);
var reversedT2 = reverseTuple(array2);
console.log(reversedT1);
console.log(reversedT2);
