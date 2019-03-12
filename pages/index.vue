<template>
  <div>
    <h1 class="text-xs-center">
      Challenges Manager
    </h1>

    <v-layout
      justify-center
    >
      <v-progress-circular
        v-show="loading"
        :size="70"
        class="mt-5"
        color="primary"
        indeterminate
      />

      <v-flex
        v-show="!loading"
        xs12
        sm8
        md6
      >
        <div
          style="display: flex;"
          class="mt-4"
        >
          <v-btn
            style="margin-left: auto;"
            color="primary"
            to="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-curriculum-challenges.md"
          >
            <v-icon left>
              book
            </v-icon>
            Style guide
          </v-btn>
        </div>

        <v-text-field
          v-model="form.title"
          label="Title"
        />

        <v-layout>
          <v-text-field
            v-model="form.id"
            label="id"
          />

          <v-btn color="orange">
            Generate
          </v-btn>
        </v-layout>

        <v-select
          v-model="form.challengeType"
          :items="challengeTypeItems"
          item-text="text"
          item-value="value"
          label="Challenge type"
        />

        <p>
          <a href="https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js">
            Challenge types
          </a>
          - what the numeric challenge type values mean (enum).
        </p>

        <v-text-field
          v-model="form.videoUrl"
          label="id"
        />

        <v-textarea
          v-model="form.description"
          label="Description"
          auto-grow
          box
        />

        <v-textarea
          v-model="form.instructions"
          label="Instructions"
          hint="Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English."
          auto-grow
          box
        />

        <h2 class="mt-4 mb-2 text-xs-center">
          Solution
        </h2>

        <p>
          Challenge solution option that passes the tests.
        </p>

        <v-card>
          <v-card-text class="px-1">
            <div
              ref="editor-solution"
              class="editor"
            />

            <v-chip
              v-if="challengeSeed"
              class="language-chip"
            >
              {{ solution.language }}
            </v-chip>
          </v-card-text>
        </v-card>

        <h2 class="mt-4 mb-3 text-xs-center">
          Challenge Seed
        </h2>

        <p>
          Code displayed in the editor by default.

          <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-curriculum-challenges.md#formatting-seed-code">
            See section in style guide.
          </a>
        </p>

        <v-card>
          <v-card-text
            style="position: relative;"
            class="px-1"
          >
            <div
              ref="editor-challenge-seed"
              class="editor"
            />

            <v-chip
              v-if="challengeSeed"
              class="language-chip"
            >
              {{ challengeSeed.language }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileContent: null,
      form: {
        title: null,
        id: null,
        challengeType: null,
        videoUrl: null,
        description: null,
        instructions: null,
        solution: null,
        challengeSeed: null
      },
      loading: true,
      challengeTypeItems: [
        {
          text: '0 (html)',
          value: 0
        },
        {
          text: '1 (js)',
          value: 1
        },
        {
          text: '2 (backend)',
          value: 2
        },
        {
          text: '3 (zipline or frontEndProject)',
          value: 3
        },
        {
          text: '5 (backEndProject)',
          value: 5
        },
        {
          text: '6 (bonfire)',
          value: 6
        },
        {
          text: '7 (modern)',
          value: 7
        },
        {
          text: '8 (step)',
          value: 8
        },
        {
          text: '9 (quiz)',
          value: 9
        },
        {
          text: '9 (invalid)',
          value: 9
        }
      ]
    }
  },
  computed: {
    domFileContent () {
      if (process.client) {
        console.log(this.fileContent)
        return new DOMParser().parseFromString(this.fileContent, 'text/html')
      }

      return null
    },
    description () {
      return this.getPartInParsedDom('#description').textContent
    },
    instructions () {
      return this.getPartInParsedDom('#instructions').textContent
    },
    solution () {
      return this.prepareContentOfSection(this.getPartInParsedDom('#solution'))
    },
    challengeSeed () {
      return this.prepareContentOfSection(this.getPartInParsedDom('#challengeSeed'))
    }
  },
  async beforeMount () {
    const prefix = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/curriculum/challenges/'
    // const url = prefix + 'english/02-javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter.english.md'
    const url = prefix + 'english/01-responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item.english.md'

    // console.log(1, await this.$axios.$get('api/users'))
    // console.log(2, await (await fetch('http://localhost:3000/api/users')).json())
    const response = await (await fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })).json()

    this.loading = false

    console.log(response)

    await this.$nextTick()

    this.fileContent = atob(response.content)
    this.form.description = this.description
    this.form.instructions = this.instructions

    this.createEditor(
      this.solution.content,
      this.solution.language,
      this.$refs['editor-solution'],
      'solution'
    )
    this.createEditor(
      this.challengeSeed.content,
      this.challengeSeed.language,
      this.$refs['editor-challenge-seed'],
      'challengeSeed'
    )
  },
  methods: {
    createEditor (content, language, el, formModelKey) {
      const monaco = require('monaco-editor')
      const model = monaco.editor.createModel(
        content,
        language
      )
      this.form[formModelKey] = content
      model.onDidChangeContent(e => {
        this.form[formModelKey] = model.getValue()
      })

      monaco.editor.create(el, {
        model
      })
    },
    getPartInParsedDom (selector) {
      if (this.domFileContent) {
        return this.domFileContent.querySelector(selector)
      }

      return null
    },
    prepareContentOfSection (el) {
      if (!el) return

      const searchStr = '```'
      let code

      if (el.textContent.includes(searchStr)) {
        console.log('el', el.innerHTML)
        code = el.innerHTML
      } else {
        const xpath = `//*[contains(text(),'${searchStr}')]`
        const matchingElement = document.evaluate(xpath, el, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

        console.log('matchingElement', el, matchingElement)

        code = matchingElement.textContent
      }

      const markdownCodeStartIndex = code.indexOf('```')
      const markdownAfterLanguageIndex = code.indexOf('\n', markdownCodeStartIndex)
      const markdownCodeEndIndex = code.lastIndexOf('```')
      const language = code.slice(
        markdownCodeStartIndex + 3,
        markdownAfterLanguageIndex
      )
      const content = code
        .slice(markdownAfterLanguageIndex, markdownCodeEndIndex)
        .trim()

      return {
        content,
        language: this.getMarkdownLanguageToEditorLanguageNormalizer(language)
      }
    },
    getMarkdownLanguageToEditorLanguageNormalizer (language) {
      const relations = {
        js: 'javascript'
      }

      return relations[language] || language
    }
  }
}
</script>

<style>
  .language-chip {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .editor {
    width: 100%;
    max-width: 100%;
    height: 500px;
    /*border: 1px solid grey;*/
  }
</style>
