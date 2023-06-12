const generator= require('generate-password')
const password = generator.generate({
    length: 7,
    numbers: true
});
// password 
console.log('The passwordis : ',password)
module.export=password
