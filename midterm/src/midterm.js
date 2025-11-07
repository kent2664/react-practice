//question1
//default message is Hello
function greet(name, message = 'Hello') {
    //return message and name
    return `${message}, ${name}!`;
}

//question1
console.log(greet("Alice"));

//question1'
console.log(greet("Bob", "Good morning"));

//question 2
function question2() {
    //definition
    const user = { name: "John", age: 25, city: "Ney York" }
    const numbers = [10, 20, 30];
    //destructuring object
    let { name, age } = user;
    //user output
    console.log(`This is ${name} I'm ${age} years old`);
    //destructuring array
    let [first, second, third] = numbers;
    console.log(`First Number:${first},Third number:${third}`);


}

//question 3
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

//question 3
function sumAll(...arr) {
    return arr.reduce((prev, val) => prev + val)
}

//question 2
question2();

//question 3
console.log(mergeArrays([1, 2], [3, 4]));

//question 3
console.log(sumAll(1, 2, 3, 4, 5));

//question 4
//parent class
class Animal {

    makeSound() {
        console.log("Some sound...");
    }
}
//subclass
class Dog extends Animal {
    //override makesound
    makeSound() {
        console.log("Woof!");
    }
}

//question 4
const dog = new Dog();
dog.makeSound();

//question 5
async function fetchData() {
    // fetch simulate and wait for 2 seconds
    const response = await new Promise(resolve => setTimeout(resolve, 2000, "Data fetched successfully"));

    return response;
}

//question5
async function main() {
    const result = await fetchData();
    console.log(result);
}

//question5 call
main();

//question 6
function question6() {

    //define iterable object
    class CounterNum {
        [Symbol.iterator]() {
            //start from 1
            let index = 1;
            return {
                next: () => ({
                    value: index++,
                    done: index > 6 //until 5
                })
            };
        }
    }

    //make instance of iterable object
    const counter = new CounterNum();
    for(let num of counter){
        console.log(num);
    }
}

//question6 call
question6();