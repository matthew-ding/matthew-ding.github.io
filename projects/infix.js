function convert(n) {
    let stack = []
    let postfix = "";
    let expression = evaluateFunc(n);

    let input = expression.split(/(?=[-+*/()^])|(?<=[^-+*/^][-+*/^])|(?<=[()])/);
    console.log(input);

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

function evaluateFunc(n) {
    let funcList = [/sin\([-+]?[0-9]*\.?[0-9]+\)/gi, /cos\([-+]?[0-9]*\.?[0-9]+\)/gi, /tan\([-+]?[0-9]*\.?[0-9]+\)/gi,
        /sqrt\([-+]?[0-9]*\.?[0-9]+\)/gi, /floor\([-+]?[0-9]*\.?[0-9]+\)/gi, /ceil\([-+]?[0-9]*\.?[0-9]+\)/gi,
        /log\([-+]?[0-9]*\.?[0-9]+\)/gi, /log10\([-+]?[0-9]*\.?[0-9]+\)/gi, /log2\([-+]?[0-9]*\.?[0-9]+\)/gi,
        /abs\([-+]?[0-9]*\.?[0-9]+\)/gi];

    for (let i = 0; i<funcList.length; i++) {
        let stringList = n.match(funcList[i]);
        console.log(stringList);
        if (stringList != null) {
            for(let j = 0; j<stringList.length; j++) {
                let farray = stringList[j].split(/\(|\)/);

                let f = new Function("x", "return Math." + farray[0] + "(x)");
                n=n.replace(stringList[j], f(farray[1]));
            }
        }
    }
    return n;
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