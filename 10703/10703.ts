//Define a type
type Primitive = string | number | boolean;
// Define a type representing a keyed map object
type KeyedMapObject<T extends object> = {

  [K in keyof T]: T[K] extends object ? KeyedMapObject<T[K]> : Primitive; 

};

// Define a function that maps the values of an object and returns a new object 
function mapObject<T extends object, R>(

  obj: T,

  callback: <K extends keyof T>(value: T[K]) => R

): KeyedMapObject<T> {
  const mappedObj = {} as KeyedMapObject<T>;
 // Iterate over the keys of the object
  for (const key in obj) {
    // Check if the property actually belongs to the object
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
    // Extract the value for the current property
      const value = obj[key as keyof T];
       // Apply the callback function to the value
      const newValue = callback(value);
       // Assign the new value to the property in the mappedObj

      mappedObj[key] = newValue as any;
    }
  }

  return mappedObj;
}

// Define an original object
const originalObject: { a: number; b: number; c: number } = { a: 1, b: 2, c: 3 };
// Map the original object values to string representation
const mappedObject = mapObject(originalObject, (value: { toString: () => any; }) => value.toString());
// Log the mapped object
console.log(mappedObject); 

// Retain the key type 
type MyObject = { a: number; b: { c: string } };
//define an original object
const originalObjectWithNested: MyObject = { a: 1, b: { c: "hello" } };
// Map the original object values to string representation
const keyPreservedObject = mapObject(
  originalObjectWithNested,
  (value: { toString: () => any; }) => value.toString()
);

console.log(keyPreservedObject);
// Output: { a: '1'; b: { c: 'hello' }; } (type: { a: string; b: { c: string }; })
