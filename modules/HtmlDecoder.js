class HtmlDecoder {
  element = null

  decode (str) {
    // this prevents any overhead from creating the object each time
    const el = this.element || document.createElement('textarea')

    // strip script/html tags
    el.innerHTML = str
    // .replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
    // .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');

    return el.value
  }
}

export default new HtmlDecoder()
