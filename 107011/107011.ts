type TransformKeys<T, U extends { [key: string]: string }> = {
    [K in keyof T as U[K] extends string? U[K] : never]: T[K];
  };
  
  function transformKeys<T, U extends { [key: string]: string }>(obj: T, newKeys: U): TransformKeys<T, U> {
    const result: Partial<TransformKeys<T, U>> = {};
    for (const key in obj) {
      if (newKeys.hasOwnProperty(key)) {
        result[newKeys[key]] = obj[key];
      } else {
        result[key] = obj[key];
      }
    }
    return result as TransformKeys<T, U>;
  }
  
  const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
  };
  
  const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
  
  console.log(transformUser);