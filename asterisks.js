function asterisks(row) {
    let output = ''
    for (let i = 0; i < row - 1; i++) {
        for (let j = 0; j < row - i; j++) {
          output += "*";
        }
        output += "\n";
    }
    for (let i = 3; i < row - 1; i++) {
        for (let j = 0; j < i; j++) {
          output += "*";
        }
        output += "\n";
    }
    return output.slice(0, -1)
}

console.log(asterisks(6));
