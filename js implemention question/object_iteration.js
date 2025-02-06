


let obj9 = {
    id: 9,
    name: "tom",
    address: "new york",
    phn: 909090
};



for (let key in obj9) {
    console.log(key, obj9[key]);
}
console.log("========>=>>=>>>=>>>>=>>>>>=>>>>>>=>>>>>>>=>>>>>>>>=>>>>>>>>>=>>>>>>>>>>")

for (let [key, value] of Object.entries(obj9)) {
    console.log([key, value]); 
}








let o = { id:9,name:"ko"}
console.log(JSON.stringify(o));








