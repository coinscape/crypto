const io = require('socket.io')();
const GDAX = require('gdax');
const websocket = new GDAX.WebsocketClient(['ETH-USD', 'BTC-USD', 'LTC-USD']);

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    let price = 'N/A'
    websocket.on('message', data => {
       price = data;
    });
    setInterval(() => {
      client.emit('timer', price);
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
