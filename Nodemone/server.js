const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>HTTP</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; }
                    .container { margin: 20px auto; max-width: 600px; }
                    h1 { color: #333; }
                    p { font-size: 18px; color: #666; }
                    .image { width: 300px; height: auto; border: 2px solid #333; border-radius: 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Artjom Fetjukov SPTV22</h1>
                    <p>Its an Apple</p>
                    <img src="/image" class="image" alt="Sample Image">
                </div>
            </body>
            </html>
        `);
    } else if (req.url === '/image') {
        const imagePath = path.join(__dirname, 'image.jpg');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Image not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(1234, () => {
    console.log(`Server is running on http://localhost:${1234}`);
});
