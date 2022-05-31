import got from 'got'
import fs from 'fs'
import { links } from '../links.js'

// 下载文件到本地
const sciurl = 'https://sci-hub.se/'

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

for (let index = 0; index < links.length; index++) {
  const link = links[index]
  const isExist = fs.existsSync(`./pdf/${link.sciTitle}.pdf`)
  console.log('===start===', index)
  if (link.right && link.sciLink !== 'no link' && !isExist) {
    console.log('===start dl===', index)
    // 下载
    try {
      if (link.sciLink.startsWith('//')) {
        await got.stream('https:' + link.sciLink).pipe(fs.createWriteStream(`./pdf/${link.sciTitle}.pdf`))
      } else {
        await got.stream(sciurl + link.sciLink).pipe(fs.createWriteStream(`./pdf/${link.sciTitle}.pdf`))
      }
    } catch (error) {
      console.log('error', index, error)
    }
    await sleep(2000)
  }
  console.log('===end dl===')
}

let invaildArr = []
for (let index = 0; index < links.length; index++) {
  const link = links[index]
  if (!link.right || link.sciLink === 'no link') {
    invaildArr.push({ ...link, invaildIndex: invaildArr.length })
  }
  fs.writeFileSync('./invaild.json', JSON.stringify(invaildArr))
}
