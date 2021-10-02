function checkProperty (str, obj) {
    return str in obj;
};

const myObj = {
    a: 1,
    b: "hello"
};

const myStr = "b";

console.log(checkProperty(myStr, myObj));
