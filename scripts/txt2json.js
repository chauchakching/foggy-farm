const fs = require('fs')
const path = require('path')

const textFilePath = path.resolve(__dirname, '..', 'contentFarmList.txt')
const text = fs.readFileSync(textFilePath, 'utf8')
const urls = text.split('\n').filter(Boolean)

fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'contentFarmList.json'), JSON.stringify(urls, null, '  '))