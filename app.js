const fetch = require('node-fetch')
const cheerio = require('cheerio')
const url = 'https://stockx.com/new-releases/sneakers'
const fs = require('fs')


const stockx = async() => {
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36'
        }
    }); 
    const result = await response.text();


    // fs.writeFile('stockx.html', result, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!')
    // })

    
    const $ = cheerio.load(result)
    console.log($('p').text())


}

stockx()

