// Define a generic function to update an object with type safety
function updateObject<T extends object, K extends keyof T>(obj: T, key: K, value: T[K]) {
    // Create a copy of the original object 
    const copyObj = { ...obj };
  
    // Update the specified key with the new value
    copyObj[key] = value;
  
    // Return the CopyObj object with the same type as the original
    return copyObj ; 
  }
  


  const obj = { a: 1, b: 'hello', c: true };
  //storing the value in updated
  const updated = updateObject(obj, 'b', 'world');
//display the updated result
  console.log(updated);
  