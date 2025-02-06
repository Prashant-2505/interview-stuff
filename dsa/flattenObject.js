function flatten(obj, prefix = '') {
    let result = {};

    for (let key in obj) {
        let fullKey = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(result, flatten(obj[key], fullKey));
        } else {
            result[fullKey] = obj[key];
        }
    }

    return result;
}

// Example:
let obj = {
    id: 9,
    name: "tom",
    address: {
        city: "new york",
        zip: 10001
    },
    phn: 909090
};

console.log(flatten(obj));
