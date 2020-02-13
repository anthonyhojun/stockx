const fs = require('fs')
const cheerio = require('cheerio')

fs.readFile('/Users/ajun/documents/projects/stockx/stockx.txt', 'utf8', function(err, contents) {
    const stockx = contents
    const $ = cheerio.load(stockx)

    console.log($('.sell', '.clear-ask nav-ask').text())
})

