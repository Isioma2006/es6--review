// tools.js

// Class definition
class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}

// Function using Promises
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data fetched from ${url}`);
            } else {
                reject('No URL provided');
            }
        }, 1000);
    });
};

// Async function
const getData = async (url) => {
    try {
        const data = await fetchData(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

// Map
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);

// Exporting the features
export { Calculator, getData, squares };
