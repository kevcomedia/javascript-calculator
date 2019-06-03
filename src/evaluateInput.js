/**
 * Converts the input string to postfix notation in array form (with each item
 * being a number or an operator). This function implements a simplified version
 * of the shunting-yard algorithm.
 */
function createPostfixQueue(input) {
  const operatorStack = [];
  const postfixQueue = [];
  let numberQueue = '';

  for (const c of input) {
    if (/[\d.]/.test(c)) {
      numberQueue += c;
    } else if (/[-+*/]/.test(c)) {
      postfixQueue.push(+numberQueue);
      numberQueue = '';

      if (/[*/]/.test(c)) {
        while (
          operatorStack.length &&
          /[*/]/.test(operatorStack[operatorStack.length - 1])
        ) {
          postfixQueue.push(operatorStack.pop());
        }
        operatorStack.push(c);
      } else if (/[-+]/.test(c)) {
        while (operatorStack.length) {
          postfixQueue.push(operatorStack.pop());
        }
        operatorStack.push(c);
      }
    } else {
      throw new Error(`Invalid input: '${c}' full input string: '${input}'`);
    }
  }

  if (numberQueue) {
    postfixQueue.push(+numberQueue);
  }

  while (operatorStack.length) {
    postfixQueue.push(operatorStack.pop());
  }

  return postfixQueue;
}

function evaluatePostfix(postfixQueue) {
  const evalStack = [];
  for (const item of postfixQueue) {
    if (typeof item === 'number') {
      evalStack.push(item);
      continue;
    }

    if (evalStack.length < 2) {
      throw new Error(JSON.stringify({ item, evalStack }));
    }

    const b = evalStack.pop();
    const a = evalStack.pop();

    if (item === '+') {
      evalStack.push(a + b);
    } else if (item === '-') {
      evalStack.push(a - b);
    } else if (item === '*') {
      evalStack.push(a * b);
    } else if (item === '/') {
      if (b === 0) {
        throw new Error(`Division by zero: ${a} / ${b}`);
      }
      evalStack.push(a / b);
    } else {
      throw new Error(`Invalid operator: '${item}'`);
    }
  }

  if (evalStack.length !== 1) {
    throw new Error(
      `Malformed postfix expression. The evaluation stack should only contain a single value after evaluation. evalStack: ${JSON.stringify(
        evalStack,
      )} postfixQueue: ${JSON.stringify(postfixQueue)}`,
    );
  }

  return evalStack[0];
}

/**
 * Evaluates the given expression input string and returns the answer. This
 * assumes the input is well-formed.
 */
function evaluateInput(input) {
  const postfixQueue = createPostfixQueue(input);
  const answer = evaluatePostfix(postfixQueue);
  return answer;
}

export default evaluateInput;
