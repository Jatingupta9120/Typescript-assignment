
type NullableProperties<T> = {
    [P in keyof T]: T[P] extends object ? {
        [Q in keyof T[P]]: T[P][Q] | null;
    } : T[P] | null;
};

// Interface defining the structure of a User object
interface User {
    age: number;
    name: string;
    address:{
        State: string;
        city: string;
        }
    }
}


type NullableUser = NullableProperties<User>;


// Interface defining the structure of a nested object


// Example usage for nested object type
type NullableNestedObject = DeepNullableProperties<NestedObject>;
/*
NullableNestedObject inferred as {
    prop1: {
        subProp1: number | null;
        subProp2: string | null;
    };
    prop2: {
        subProp3: boolean | null;
    };
}
*/
