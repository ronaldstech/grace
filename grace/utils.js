const getCurrent = () => {
    new Date().toISOString();
}

function greet(){
    return "Good morning";
}

function sum(){
    const a=4;
    const b=7;
    return a+b;
}

module.exports = { getCurrent, greet, sum };