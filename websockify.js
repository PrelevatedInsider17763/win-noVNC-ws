var websockify = require('node-websockify');

websockify({
  source: '127.0.0.1:5900',
  target: '127.0.0.1:7860'
});
