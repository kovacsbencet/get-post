
const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
})

app.use("/public", express.static(`${__dirname}/../frontend/public`))

app.listen(9000, () => {
	console.log("https://127.0.0.1:9000")
})


/* 
const http = require('http');
const fs = require('fs');
const path = require('path');

const serverFunction = (req, res) => {

	const errorHTML = "Minden oksa";
    
	
	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);


    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				console.log("Az index.html rendben kiszolgálódott.");
				res.end(data);
			}
		});
	}
	});
}

const server = http.createServer(serverFunction);

const port = 9000
const ipAddress = "127.0.0.1"
const listenFunction = () => {
const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log("Ha azt csinálod amit más, olyan leszel, mint ők");
}

server.listen(port, ipAddress, listenFunction);
 */