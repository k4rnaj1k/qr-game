var QRCode = require('qrcode')
const fs = require('fs');
const { log } = require('console');

const data = fs.readFileSync('../minified.min.html');
QRCode.toFile('result.png', [{ data: 'data:text/html,' + encodeURIComponent(data.toString()) }, { mode: 'alphanumeric' }], { type: 'terminal', errorCorrectionLevel: 'L', version: 40 }, function (err, url) {
    console.log(url)
    console.log(err)
})