const fibonacci = function(pos) {
    if (pos < 0) return "OOPS";
    
    let current = 0;
    let next = 1;

    for(let i = 0; i < pos; i++) {
        [current, next] = [next, current + next];
    }
    return current;
}

module.exports = fibonacci;