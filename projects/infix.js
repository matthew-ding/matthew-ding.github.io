function convert(expression) {
    let stack = []
    let postfix = "";

    let input = expression.match(/[^\d()]+|[\d.]+/g);
    for (let i=0; i<input.length; i++) {
        let n = input[i];

        if (isValidNumber(n)) {
            postfix+=n + " ";
        }
        else if (n=="(" || n=="^") {
            stack.push(n);
        }
        else if (n==")") {
            while (!(stack.length==0) && !(stack.peek()=="(")) {
                postfix+=stack.pop() + " ";
            }
            if(!(stack.length==0)) {
                stack.pop();
            }
        }
        else if (isOperator(n)) {
            while (!(stack.length==0) && !higherPrecedence(n, stack.peek())) {
                let c = stack.pop();
                if (c=="(" || c==")") {
                    break;
                }
                else {
                    postfix+= c + " ";
                }
            }

            stack.push(n);
        }
        else {
            throw "error"
        }
    }

    while (!(stack.length==0)) {
        postfix+=stack.pop() + " ";
    }
    return postfix;
}

//checks whether string is a valid operator
function isOperator(n) {
    return n=="+" || n=="-" || n=="*" || n=="/";
}

function isValidNumber(n) {
    if (n == null) {
        return false;
    }
    return !isNaN(n)
}

function higherPrecedence(b, a) {
    return (a=="+" || a=="-") && (b=="*" || b=="/");
}

// Adding peek method to the Array
// prototype chain
Array.prototype.peek = function () {
  if (this.length === 0) {
    throw new Error("out of bounds");
  }
  return this[this.length - 1];
};