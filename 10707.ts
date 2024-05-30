type FnLoading<T, K> = (...args: T[]) => K;
//
function Loading<T, K>(fn: FnLoading<T, K>): FnLoading<T, K> {
  return (...args: T[]): K => {
    console.log('Loading...');
    const res = fn(...args);
    console.log('Finished loading.');
    return res;
  };
}
//defined add function
const addOperation = (...args: number[]): number => {
    console.log('adding...')
  return args.reduce((sum, num) => sum + num, 0);
};

//here HOF :-function take another function as parameter
const addWithLoading = Loading(addOperation);

//display output
const res = addWithLoading(5, 3, 8);
console.log('Added res:', res);
