const	http 	= require('http'),
		fs 	= require('fs')

fileType = (response, fileName, type) => {
	fs.readFile(fileName, (err, data) => {
		if (err) {
			response.writeHead(404)
			response.write(err)
		}
		else {
			response.writeHead(200, {'Content-Type': type})
			response.write(data)
		}
		response.end()
	})
}

http.createServer( (request, response) => {
	if ( request.url === '/' ){
		response.writeHead(200, {'Content-Type': 'text/html'})
		fileType(response, 'index.html', 'text/html')
	}
	else if (/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
		fileType(response, request.url.toString().substring(1), 'text/javascript')
	}
	else if (/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		fileType(response, request.url.toString().substring(1), 'text/css')
	}
	else {
		console.log('Server running on http://localhost:9090')
		response.end()
	}
}).listen(9090)