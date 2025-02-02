const isValid = function(s) {
    const stack = [];

    for (const c of s) {
        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (stack.at(-1) == c) stack.pop();
                else return false;
                break;
        }
    }
    return !stack.length;
}

module.exports = isValid;