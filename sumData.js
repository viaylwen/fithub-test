const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))

function summarize(array) {
    let output = [
        {"locationTransaction": 'FIT HUB SUNTER ALTIRA', "totalAmount": 0},
        {"locationTransaction": 'FIT HUB PANCORAN', "totalAmount": 0},
        {"locationTransaction": 'FIT HUB BENHIL', "totalAmount": 0},
        {"locationTransaction": 'FIT HUB ARTERI PONDOK INDAH', "totalAmount": 0}
    ]
    output.forEach(el => {
        for (let i = 0; i < array.length; i++) {
            const location = array[i].locationTransaction;
            const amount = array[i].totalAmount
            if (location === el.locationTransaction) {
                el.totalAmount += amount
            }
        }
    });
    output.sort((a, b) => parseFloat(b.totalAmount) - parseFloat(a.totalAmount));
    // return output
    fs.writeFile('./output.json', JSON.stringify(output), 'utf8', (err) => {
        if (err) return console.log(err)
        console.log("The file was saved!");
    }); 
}

summarize(data)