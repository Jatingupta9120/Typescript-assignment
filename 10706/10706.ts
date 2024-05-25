//defined operation function by using this function we can do any operation like add subtract
function operationFunction<T extends (...args: any[]) => any>(func: T): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
        //input can be vary
        const result = func(...args);

        //displaying the result
        console.log(`Calling function ${func.name} with arguments: ${args.join(', ')} = ${result}`);
        return result;
    }) as T;
}

// Defined Add function
const add = (...nums: number[]): number => nums.reduce((acc, curr) => acc + curr, 0);

// Defined Subtract function
const subtract = (...nums: number[]): number => nums.reduce((acc, curr) => acc - curr);

// Apply operationFunction to add and subtract functions
const displaySum = operationFunction(add);
const displayDifference = operationFunction(subtract);

// Storing value from function
const AddedValue = displaySum(3, 5); // Output: Calling function add with arguments: 3, 5, 5 = 13
const AddedValue = displaySum(3, 5, 8); // Output: Calling function add with arguments: 3, 5, 5 = 13
const differenceValue = displayDifference(10,2,7); // Output: Calling function subtract with arguments: 10, 7 = 3


