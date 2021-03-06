console.log("Introduction to Javascript");

//prints numbers 1-100, fizz if divisible by 3, buzz if divisible by 5, fizzbuzz if both
function fizzBuzz()
{
    for (let i = 1; i <= 100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("FizzBuzz");
        } else if(i % 3 == 0)
        {
            console.log("Fizz");
        } else if(i % 5 == 0)
        {
            console.log("Buzz");
        } else
        {
            console.log(i);
        }
    }
}

//returns the number of "B"s in the given string
function countBs(str)
{
    return countChar("B", str);
}

//returns the number of the given character in the given string
function countChar(needle, haystack)
{
    let count = 0;
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle) {
            count++;
        }
    }
    return count;
}


//test my functions
fizzBuzz();

console.log("Counting the B's in: hello")
console.log(countBs("hello"));
console.log("Counting the B's in: BbbbbbB")
console.log(countBs("BbbbbbB"));
console.log("Counting the B's in: buBBles")
console.log(countBs("BuBBles"));

console.log("Counting the h's in: hello")
console.log(countChar("h", "hello"));
console.log("Counting the !'s in: BbbbbbB")
console.log(countChar("!", "BbbbbbB"));
console.log("Counting the ?'s in: buBBles?????")
console.log(countChar("?", "buBBles?????"));