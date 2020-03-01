const shell = require('shelljs')
const path = require('path')

const domainListUrl = 'https://raw.githubusercontent.com/wildskyf/content-farm-list/master/src.txt'
const domainListFilePath = path.resolve(__dirname, '..', 'contentFarmList.txt')

shell.exec(`curl ${domainListUrl} > ${domainListFilePath}`)
shell.exec(`node ${path.resolve(__dirname, 'txt2json.js')}`)