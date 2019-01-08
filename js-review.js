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
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "B") {
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