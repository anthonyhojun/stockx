const fetch = require('node-fetch')
const cheerio = require('cheerio')
const url = 'https://www.twitch.tv/'
const fs = require('fs')


const twitch = async() => {
    const response = await fetch(url); 
    const result = await response.text();

    const $ = cheerio.load(result)

    // fs.writeFile('stockx.html', result, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!')
    // })

    
    // const $ = cheerio.load(result)
    // console.log($('p').text())

    //console.log(result)
    console.log(result.querySelectorAll('document.querySelector("#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > nav > div > div.tw-align-items-stretch.tw-flex.tw-flex-grow-1.tw-flex-nowrap.tw-flex-shrink-1.tw-full-width.tw-justify-content-start > div:nth-child(2) > div > div:nth-child(2) > div.tw-align-self-center.tw-flex.tw-full-height > a > div > div.tw-flex-column.tw-hide.tw-sm-flex > div.tw-hide.tw-xl-flex > p")'))


}

twitch()

