type Tuple = [number, string,string, boolean];
//Defining arrY using TypeScript types
const array1: Tuple = [42, 'hello','jkkjjj', true];

//Defining arrqy without TypeScript types
const array2 = [42, 'hello', true,''];

// Defined the Function to reverse the tuple 
function reverseTuple<T>(tuple: T[]): T[] {
// Create an empty array of type T to store the reversed tuple
  const reversed= [] as T[];
  // Iterate over the elements of the  tuple in reverse order
  for (let i = tuple.length - 1; i >= 0; i--) {
    // Push each element into the reversed array
    reversed.push(tuple[i]);
  }
  // Return the reversed tuple
  return reversed;
}

// Reversing the tuple with loop approach
const reversedT1 = reverseTuple(array1);

const reversedT2 = reverseTuple(array2);

console.log(reversedT1);
console.log(reversedT2); 
