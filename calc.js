const calc = {
    add: (a, b) => a+b,
    sub: (a, b) => a-b,
    mul: (a, b) => a*b,
    div: (a, b) => b !== 0 ? a / b : null,
}

module.exports = calc;