const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const fs = require('fs');

const log = 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {

    // io.emit('chat message', msg);((
    console.log('message: ' + msg)
  
  });
  // socket.onmessage = (msg) => {
  //   log.append
  //   console.log(data);
  // };
});



http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
  console.log(log)
});




// var access = fs.createWriteStream(dir + '/node.access.log', { flags: 'a' })
//       , error = fs.createWriteStream(dir + '/node.error.log', { flags: 'a' });

// // redirect stdout / stderr
// proc.stdout.pipe(access);
// proc.stderr.pipe(error);
// Sh