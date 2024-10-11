const standardizeInput = (collection) =>
    Array.isArray(collection) ? collection.slice() : Object.values(collection);

const myEach = (collection, callback) => {
    const newCollection = standardizeInput(collection);
    for (let index = 0; index < newCollection.length; index++) {
        callback(newCollection[index]);
    }
    return collection;
}

const myMap = (collection, callback) => {
    const newCollection = standardizeInput(collection);
    const newArray = [];
    for (let index = 0; index < newCollection.length; index++) {
        newArray.push(callback(newCollection[index]));
    }
    return newArray;
}

const myReduce = (collection, callback, accumulator) => {
    let newCollection = standardizeInput(collection);
    if (accumulator === undefined) {
        accumulator = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let index = 0; index < len; index++) {
        accumulator = callback(accumulator, newCollection[index]);
    }
    return accumulator;

}

const myFind = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
    for (let index = 0; index < newCollection.length; index++) {
        if (predicate(newCollection[index])) {
            return newCollection[index];
        }
    }
    return undefined;
}

const myFilter = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
    const newArray = [];
    for (let index = 0; index < newCollection.length; index++) {
        if (predicate(newCollection[index])) {
            newArray.push(newCollection[index]);

        }
    }
    return newArray;

}

const mySize = (collection) => {
    const newCollection = standardizeInput(collection);
    return newCollection.length;

}


const myFirst = (array, stop = false) =>
    stop ? array.slice(0, stop) : array[0];

const myLast = (array, start = false) =>
    start ? array.slice(array.legnth - start, array.legnth) : array[array.length - 1];

const mySortBy = (array, callback) => {
    const newArray = [...array];
    return newArray.sort((a, b) => {
        const result = callback(a) - callback(b);
        return result !== 0 ? result : 0;
    });

}

const unpack = (reciever, array) => {
    for (let value of array) {
        reciever.push(value);
    }
}



const myFlattern = (collection, shallow, newArray = []) => {
    if (shallow) {
        for (let value of colection) {
            Array.isArray(value) ? unpack(newArray, value) : newArray.push(value);
        }
    } else {
        for (let value of collection) {
            if (array.isArray(value)) {
                myFlattern(value, false, newArray);
            } else {
                newArray.push(value);
            }
        }
        return newArray;
    }
}

const myKeys = (object) => {
    const keys = [];
    for (let key in object) {
        keys.push(key);
    }
    return keys;
}

const myValues = (object) => {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

