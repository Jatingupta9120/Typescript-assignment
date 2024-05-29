
export{}
type DefinedProps1<T>={
    [k in keyof T]-?:Exclude<T[k],null|undefined>
}

interface User1{
    age: number|undefined;
    name?: string|null;
}

type definedUser1=DefinedProps1<User1>

type tuple=[number|string|null|undefined]
type DefinedProps2<Type>=
{
    [k in keyof Type] - ? : Type[k] extends tuple
    ?Exclude<Type[k],null|undefined>
    :Exclude<Type[k],null|undefined>
}

interface User2{
    age:number|undefined;
    name?:string|null;
    roll: number|null|undefined;
    adress?:
    {
        city:string|null|undefined;
        zipcode:string;
    }
}


type definedUser2=DefinedProps2<User2>


/**
 * It will infer this type definedUser2 
 * 
 * type definedUser2 = {
    age1: number;
    name1: string;
    roll: number;
    address: {
        city: string ;
        zipCode?: number;
    };
}
 */

