function transformKeys(obj, newKeys) {
    var result = {};
    for (var key in obj) {
        if (newKeys.hasOwnProperty(key)) {
            result[newKeys[key]] = obj[key];
        }
        else {
            result[key] = obj[key];
        }
    }
    return result;
}
var user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};
var transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
console.log(transformUser);
