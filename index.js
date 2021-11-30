#!/usr/bin/env node
const fs = require('fs')
const glob = require('glob');
const path = require('path');
const twemoji = require('twemoji');
const DomParser = require('dom-parser');
const parser = new DomParser();

const convertToEmoji = (utf16) => {

  const emojiRaw = twemoji.parse(utf16)
  const dom = parser.parseFromString(emojiRaw);
  const emojiElements = dom.getElementsByClassName('emoji')

  let emoji
  if (emojiElements.length) {
    emoji = emojiElements[0].getAttribute('alt')
  } else {
    emoji = emojiRaw
  }

  return emoji
}

const srcPath = '/Users/naoppy/naogify/twemoji-sprites/icons'

glob.sync(path.join(srcPath, `*.svg`))
  .map(function (f) {

    let fileName = f.replace(`${srcPath}/`, '')
    fileName = fileName.replace('.svg', '')

    const codePointList = fileName.split('-')

    let utf16 = ''
    for (let i = 0; i < codePointList.length; i++) {
      const codePoint = codePointList[i];
      utf16 = utf16 + twemoji.convert.fromCodePoint(codePoint)
    }

    const emoji = convertToEmoji(utf16)
    const outputPath = f.replace(fileName, emoji)

    fs.renameSync(f, outputPath)
  });