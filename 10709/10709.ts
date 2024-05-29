// Task 1-> Single level object type



type nullableProp1<T>={
    [k in keyof T]:T[k]|null;
}


// Example of single level Object 
interface User1{
    age1:number,
    number1:string,
    roll2:number,
}

type nullableUser1=nullableProp1<User1>;

/* It will infer the type 
type nullableUser1 = {
    name: string | null;
    age: number | null;
    roll:number|null;
}
*/


//Task 2:-> Nested object type

type nullableProp2<T>={
    [k in keyof T]:T[k] extends object 
    ?nullableProp2<T[k]> |null
    :T[k]|null  
}

//example of nested level Object 

interface User2{
    age2:number;
    name2:string;
    roll2:number;
    adress2:{
        city:string;
        state:string;
    }
}


type nullableUser2=nullableProp2<User2>



