const path = require('path')

console.log(__filename) //file name
console.log(path.basename(__filename)) //based file name
console.log(path.dirname(__filename)) //name of folder
console.log(path.extname(__filename)) //name of extention


console.log(path.parse(__filename)) //path in json format

console.log(path.join(__dirname, 'test', 'second.html')) //path to folder and test, second.html, as part of the path
console.log(path.resolve(__dirname, './test', '/second.html')) //path to second.html