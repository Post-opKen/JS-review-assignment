/*
* Ean Daus
* 1/22/19
* js-review-2.js
* JS review assignment part 2
*/

//define a function that compares the property names and values of two objects
function objEquals(obj1, obj2)
{
    //get the key arrays of both objects
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    //objects must have the same number of properties
    if(keys1.length !== keys2.length)
    {
        return false;
    }

    for (let i = 0; i < keys1.length; i++)
    {
        //all properties must be the same
        if(keys1[i] !== keys2[i])
        {
            return false;
        }
        //the values of all properties must be the same
        if(JSON.stringify(obj1[keys1[i]]) !== JSON.stringify(obj2[keys2[i]]))
        {
            return false;
        }
    }
    return true;
}

//define a function that takes an array of arrays and concats them into one long array
function flatten(array)
{
    let flatArray = [];
    array.reduce(function(accumulator, currentValue){
        flatArray = flatArray.concat(currentValue);
    }, 0);
    return flatArray;
}

//test objEquals
let obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));
// → true

console.log(objEquals(obj, {here: 1, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false

//test flatten
let arr = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arr));

// → [1, 2, 3, 4, 5, 6]