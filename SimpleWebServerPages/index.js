const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        if (req.url === '/') {
            // Чтение главной страницы
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Ошибка при загрузке страницы');
                        throw err;
                    } else {
                        res.end(content);
                    }
                }
            );
        } else if (req.url === '/about') {
            // Чтение страницы о нас
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Ошибка при загрузке страницы');
                        throw err;
                    } else {
                        res.end(content);
                    }
                }
            );
        } else if (req.url === '/shop') {
            // Чтение страницы магазина
            fs.readFile(
                path.join(__dirname, 'views', 'shop.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Ошибка при загрузке страницы');
                        throw err;
                    } else {
                        res.end(content);
                    }
                }
            );
        }
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        req.on('data', (data) => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            const message = body.toString().split('=')[1];
            res.end(`<h1>Ваше сообщение: ${message}</h1>`);
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
