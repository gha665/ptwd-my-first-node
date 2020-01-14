// console.log("Is this my first node project?")

const myChalk = require(`chalk`);
const myHttp = require('http');
require('dotenv').config();



console.log(myChalk.blue("This text is blue!"));
console.log(myChalk.green("And this text is green!"));

const myServer = myHttp.createServer((request, response) => {
    console.log(`Requested URL is: ${request.url}`)
    if (request.url === '/') {
        response.write('You requested localhose:3000, my friend!');
        response.end();
    } else if (request.url === '/ptwd102019') {
        response.write('You can do IT!');
        response.end();
    } else {
        response.write('You are trying to access a wrong page. Error 404')
    }
})

// myServer.listen(3000, () => console.log('Im running on port 3000'));

myServer.listen(process.env.PORT, () => console.log("I'm running on port 3000" ));
