import jsYaml from 'js-yaml'

class PrimaryInfoParser {
  parse (content) {
    const border = '---'
    const startIndex = content.indexOf(border) + border.length
    const endIndex = content.indexOf(border, startIndex)
    const section = content.slice(startIndex, endIndex).trim()
    const yaml = jsYaml.load(section)

    const id = yaml.id // this.findByKey('id', section)
    const title = yaml.title // this.findByKey('title', section)
    const challengeType = yaml.challengeType // this.findByKey('challengeType', section)
    const videoUrl = yaml.videoUrl // this.findByKey('videoUrl', section)

    return { id, title, challengeType, videoUrl }
  }
  // findByKey (key, section) {
  //   const keyWithColon = key + ':'
  //   const keyIndex = section.indexOf(keyWithColon)
  //
  //   return section.slice(
  //     keyIndex + keyWithColon.length,
  //     section.indexOf('\n', keyIndex)
  //   ).trim()
  // }
}

export default new PrimaryInfoParser()
