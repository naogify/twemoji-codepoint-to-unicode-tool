#!/usr/bin/env node
const fs = require('fs')
const glob = require('glob');
const path = require('path');
const twemoji = require('twemoji');
const DomParser = require('dom-parser');
const parser = new DomParser();

// const srcPath = '/Users/naoppy/naogify/twemoji-sprites/icons'

// const svgs = glob.sync(path.join(srcPath, `*.svg`))
//   .map(function (f) {

//     const fileName = f.replace(`${srcPath}/`, '')
//     console.log(fileName)

//     // const utf16 = twemoji.convert.fromCodePoint('1f004');
//     // const emojiRaw = twemoji.parse(utf16)
//     // const dom = parser.parseFromString(emojiRaw);
//     // const fileName = dom.getElementsByClassName('emoji')[0].getAttribute('alt')
    
//     // fs.renameSync('./aaa.txt', `${fileName}.txt`)
//   });


const utf16 = twemoji.convert.fromCodePoint('1f1e6-1f1e8');
console.log(utf16)
const emojiRaw = twemoji.parse(utf16)
const dom = parser.parseFromString(emojiRaw);
const fileName = dom.getElementsByClassName('emoji')[0].getAttribute('alt')

fs.renameSync('./aaa.txt', `${fileName}.txt`)