// Define a DeepMerge type to merge two objects deeply
type DeepMerge<T, U> = {[K in keyof T | keyof U]: K extends keyof U ? U[K] : K extends keyof T ? T[K]: never; };
  // Function for deep object merging, leveraging generics for type safety
  function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): DeepMerge<T, U> {
    // defined Empty object to store merged data
    const merged: any = {};
  
    // Looping through all keys present in obj1
    for (const key in obj1) {

    // Check if the key also exists in the second object (obj2)
      if (key in obj2) {
        const value1 = obj1[key];
        const value2 = obj2[key];
  
        // doing recursively deep merge for nested objects if both values are objects and not null
        if (
          typeof value1 === 'object' &&
          value1 !== null &&
          !Array.isArray(value1) &&
          typeof value2 === 'object' &&
          value2 !== null &&
          !Array.isArray(value2)
        ) {
          merged[key] = deepMerge(value1, value2);
        } else {
          // Persist the type of the second object's value

          merged[key] = value2;
        }
      } else {
        merged[key] = obj1[key];
      }
    }
  
    // Looping through all keys present in obj2 and not present in obj1

    for (const key in obj2) {

     // Check if the key doesn't exist in the first object    
      if (!(key in obj1)) {
     // Add the key-value pair from the second object
        merged[key] = obj2[key];
      }
    }
  
    
    return merged;
  }
  
   //Defined object 1
  const obj1: { a: number; b: { c: number } } = {
    a: 1,
    b: {
      c: 2,
    },
  };
  //here's defined object 2
  const obj2: { b: { d: number }; e: number } = {
    b: {
      d: 3,
    },
    e: 4,
  };
  
  //here's the result of the merge
  const totalresult = deepMerge(obj1, obj2);
  
  console.log(totalresult); 
  