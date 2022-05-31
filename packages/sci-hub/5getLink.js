import fs from 'fs'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
const docs = JSON.parse(fs.readFileSync('./4doiRight.json', 'utf8'))

const sciurl = 'https://sci-hub.se/'

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
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie: '__ddg1_=giYk0tO92QbITcs3mP9H; session=637203f714946bb62808f309b9d7da1c; refresh=1650805255.6121',
      Referer: 'https://sci-hub.se/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: null,
    method: 'GET',
  })

  const body = await response.text()
  return body
}

async function getDoi(doc) {
  // 获取页面 link title doi
  const html = await getHtml(`${sciurl}${doc.doi}`)
  const $ = cheerio.load(html)
  const sciLinkHtml = $('#buttons').html()
  const sciLink = /onclick="location.href='(.*)'">/.exec(sciLinkHtml)[1]
  if (sciLink) {
    const sciTitle = $('#citation > i').text().trim()
    const sciDio = $('#doi').text().trim()
    console.log('---link---', sciLink, sciTitle)
    // 判断title doi 匹配
    const sciTitleMatch = sciTitle.toLowerCase().includes(doc.name.trim().toLowerCase())
    const sciDoiMatch = sciDio.toLowerCase() === doc.doi.trim().toLowerCase()
    return {
      sciLink,
      sciTitle,
      sciTitleMatch,
      sciDoiMatch,
      ...doc,
    }
  } else {
    return {
      sciLink: 'no link',
      ...doc,
    }
  }
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

// get links of docs
let doiArray = []
for (let index = 0; index < docs.length; index++) {
  const doc = docs[index]
  console.log('===start===', index, '---', doc.index, doc.doi)
  try {
    const res = await getDoi(doc)
    doiArray.push(res)
  } catch (error) {
    console.log('error doc', doc.index, doc.doi)
    doiArray.push({
      sciLink: 'no link',
      ...doc,
    })
  }
  await sleep(3000)
  console.log('===end===', index)
  fs.writeFileSync('./6links.json', JSON.stringify(doiArray))
}
