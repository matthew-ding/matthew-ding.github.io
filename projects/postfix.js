let stack = []

// OPERATIONS
function addition() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a+b);
}

function subtraction() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b-a);
}

function multiplication() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(a*b);
}

function division() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b/a);
}

function exponentiation() {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(Math.pow(b, a));
}

// generic operator evaluation
function evalSingleOp(operator) {
    if (operator=="+") {
        addition();
    }
    else if (operator=="-") {
        subtraction();
    }
    else if (operator=="*") {
        multiplication();
    }
    else if (operator=="/") {
        division();
    }
    else if (operator=="^") {
        exponentiation();
    }
}

//evaluates entire string
function evaluate(n) {
    let input = n.trim().split(" ");

    for (let i=0; i<input.length; i++) {
        if (isOperator(input[i])) {
            evalSingleOp(input[i]);
        }
        else if (isValidNumber(input[i])) {
            stack.push(parseFloat(input[i]));
        }
        else {
            throw "error";
        }
    }

    if (stack.length!=1) {
        throw "error"
    }

    return parseFloat(stack.pop());
}

function isValidNumber(n) {
    if (n == null) {
        return false;
    }
    return !isNaN(n)
}

//checks whether string is a valid operator
function isOperator(n) {
    return n=="+" || n=="-" || n=="*" || n=="/" || n=="^";
}