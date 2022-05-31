import fs from 'fs'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { docNames } from './getDocs.js'

const sciurl = 'https://search.crossref.org/?from_ui=&q='

async function getHtml(url) {
  const response = await fetch(url, {
    headers: {
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Microsoft Edge";v="100"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-site',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'rack.session=85c01df58a9d762b127d78b7cf0c9c5119497077a85095dbf7378adbefbda339; _pk_ref.17.755c=%5B%22%22%2C%22%22%2C1650811727%2C%22https%3A%2F%2Fwww.crossref.org%2F%22%5D; _pk_id.17.755c=4a7d8611155068c5.1650811727.; _pk_ses.17.755c=1',
      Referer: 'https://www.crossref.org/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: null,
    method: 'GET',
  })
  const body = await response.text()
  return body
}

// const sciurl = 'https://www.sciencedirect.com/search?qs='
// const name = 'Nitrogen addition reduces dissolved organic carbon leaching in a montane forest'

// main function
async function getDoi(name) {
  const html = await getHtml(`${sciurl}${encodeURIComponent(name)}`)
  const $ = cheerio.load(html)
  const links = $('.item-links-outer > .item-links').text()
  const titles = $('.item-data > .lead').text()
  console.log('---links---', links.substring(0, 100))
  // 找到doi
  const reg = /https:\/\/doi.org\/(.*)/g.exec(links)

  const title = titles
    .split('\n')
    .filter(item => item)
    .map(item => item.trim())
  return {
    doi: reg[1],
    title: title[0],
  }
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

// get dois
let doiArray = []
for (let index = 0; index < docNames.length; index++) {
  const element = docNames[index]
  console.log('===start===', index, element)
  try {
    const { doi, title } = await getDoi(element)
    const name = element.trim().toLowerCase()
    console.log('---title---', title, name.includes(title.toLowerCase()))
    doiArray.push({ index, name: element, doi, right: name.includes(title.toLowerCase()), title })
  } catch (error) {
    console.log('error element', element)
  }
  await sleep(3000)
  console.log('===end===')
  fs.writeFileSync('./doi.json', JSON.stringify(doiArray))
}
