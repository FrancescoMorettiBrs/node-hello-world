import helloWorld from "./index.js";

const saluto = process.argv[2]

if (saluto) {
    console.log(saluto);
}   else {
    helloWorld()
}

