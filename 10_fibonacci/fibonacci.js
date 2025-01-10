const fibonacci = function(pos) {
    if (pos < 0) return "OOPS";
    
    let current = 0;
    let next = 1;
    let temp;

    for(let i = 0; i < pos; i++) {
        temp = current + next;
        current = next;
        next = temp;
    }
    return current;
}

module.exports = fibonacci;