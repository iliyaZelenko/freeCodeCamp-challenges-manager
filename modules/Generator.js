import jsYaml from 'js-yaml'

class Generator {
  element = null

  generate (data) {
    return this.getText(data)
  }

  getText (data) {
    let {
      title, id, challengeType, videoUrl,
      description, instructions,
      solution, solutionLanguage,
      challengeSeed, challengeSeedLanguage,
      setup, setupLanguage,
      teardown, teardownLanguage,
      tests
    } = data

    const yamlDumpOptions = {
      lineWidth: 9999
    }

    tests = tests.map(i => ({
      text: i.text,
      testString: i.testString
    }))

    return `---
id: ${id}
title: ${title}
challengeType: ${challengeType}
videoUrl: '${videoUrl}'
---

## Description
<section id='description'>
${description}
</section>
${instructions ? `
## Instructions
<section id='instructions'>
${instructions}
</section>
` : ''}
## Tests
<section id='tests'>

\`\`\` yml
${jsYaml.dump({ tests }, yamlDumpOptions)}\`\`\`

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='${challengeSeedLanguage}-seed'>

\`\`\`${challengeSeedLanguage}
${challengeSeed}
\`\`\`

</div>
${setup ? `
### Before Test
<div id='${setupLanguage}-setup'>

\`\`\`${setupLanguage}
${setup}
\`\`\`

</div>
` : ''}${teardown ? `
### After Test
<div id='${teardownLanguage}-teardown'>

\`\`\`${teardownLanguage}
${teardown}
\`\`\`

</div>
` : ''}
</section>

## Solution
<section id='solution'>

\`\`\`${solutionLanguage}
${solution}
\`\`\`

</section>
`
  }
}

export default new Generator()
