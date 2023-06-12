console.log("HELLO WORLD")
//second task 
const http = require("http");
const server=http.createServer(function(req,res){
    res.write("<h1> Hello Node!</h>\n");
    res.end()

})
server.listen(3000, (err) => {
    err
      ? console.log(err)
      : console.log("Server is running on http://localhost:3000");
    })
//third task 
const fs = require("fs");
console.log('File system starting')
fs.writeFile("welcome.txt", "hello node", (err) => {
    err ? console.log(err) : console.log("File successfully created");
  });   
  
  fs.readFile("welcome.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
  //fourth task 
  const password = require ('./password-generator')
  //fifth tak 
  const transporter = require ('./email-sender')

server.listen(3000, (err) => {
  err
    ? console.log(err)
    : console.log("Server is running on http://localhost:3000");
});



