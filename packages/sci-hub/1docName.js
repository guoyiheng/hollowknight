import fs from 'fs'
const docNames = fs.readFileSync('./0docName.txt', 'utf8').split('\n')

let docNamesTemp = []
docNames.forEach(doc => {
  const reg1 = /20...\.(.*)\./.exec(doc)
  const name = reg1[1].split('.')[0]
  docNamesTemp.push(name.trim())
})

fs.writeFileSync('./2docName.txt', docNamesTemp.join('\n'))
