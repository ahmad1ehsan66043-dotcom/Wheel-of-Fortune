const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

// PeerJS Server
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);
app.use(express.static('public'));

// مسیرها
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/phone', (req, res) => {
  res.sendFile(__dirname + '/public/phone.html');
});

app.get('/computer', (req, res) => {
  res.sendFile(__dirname + '/public/computer.html');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`
  🚀 سرور اجرا شد!
  🌐 آدرس: http://localhost:${PORT}
  📱 صفحه گوشی: http://localhost:${PORT}/phone
  🖥️ صفحه کامپیوتر: http://localhost:${PORT}/computer
  `);
});