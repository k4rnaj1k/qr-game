const fs = require('fs');

fs.watchFile('./mini-game.js', (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('size game ' + curr.size + ' bytes');
  }
});

fs.watchFile('./qr-gzip.html', (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log('size html ' + curr.size + ' bytes');
    }
  });