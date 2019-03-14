<template>
  <div>
    <h1 class="text-xs-center mt-3">
      Challenges Manager
    </h1>
    <p class="text-xs-center grey--text mb-5">
      Made for <i>freecodecamp.org</i> by
      <a href="https://github.com/iliyaZelenko">
        Ilya Zelenko
      </a>
    </p>

    <v-layout justify-center>
      <v-btn
        color="purple"
        large
        dark
        @click="editMode = true; creationMode = false"
      >
        <v-icon left>
          edit
        </v-icon>

        Update existing challenge
      </v-btn>

      <v-btn
        color="green"
        large
        dark
        @click="creationMode = true; editMode = false"
      >
        <v-icon left>
          add
        </v-icon>

        Create new challenge
      </v-btn>
    </v-layout>

    <template v-if="editMode">
      <v-layout class="mt-3">
        <v-text-field
          v-model="githubFileURL"
          label="Challenge file URL"
          prepend-icon="insert_link"
          box
          @click="$event.currentTarget.select()"
        />

        <v-btn
          color="primary"
          @click="parseURL"
        >
          Parse file
        </v-btn>
      </v-layout>

      <v-subheader>
        Examples of correct URL's
      </v-subheader>

      <ul>
        <li>
          https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/01-responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item.english.md
        </li>
        <li>
          https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes.english.md
        </li>
        <li>
          https://github.com/freeCodeCamp/freeCodeCamp/blob/409c39abf1cf9ca42be056171c50f13f27c11737/curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-javascript/divide-one-number-by-another-with-javascript.english.md
        </li>
      </ul>

    </template>

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
        v-if="(editMode && !loading && fileContent) || creationMode"
        class="mb-4"
        xs12
        sm12
        md10
        lg10
        xl7
      >
        <div
          style="display: flex;"
          class="mt-4"
        >
          <v-btn
            style="margin-left: auto;"
            color="primary"
            href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-curriculum-challenges.md"
            target="_blank"
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

          <v-btn
            color="orange"
            @click="setRandomId"
          >
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
          <a
            href="https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js"
            target="_blank"
          >
            Challenge types
          </a>
          - what the numeric challenge type values mean (enum).
        </p>

        <v-text-field
          v-model="form.videoUrl"
          label="Video URL"
        />

        <!--
        <v-textarea
          v-model="form.description"
          label="Description"
          auto-grow
          box
        />
        -->

        <h3 class="mt-4 mb-2 text-xs-center">
          Description
        </h3>

        <editor
          v-if="form.description || creationMode"
          v-model="form.description"
          language="html"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <h3 class="mt-4 mb-2 text-xs-center">
          Instructions
        </h3>

        <p class="grey--text">
          Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.
        </p>

        <editor
          v-if="form.instructions || creationMode"
          v-model="form.instructions"
          language="html"
        />

        <!--
        <v-textarea
          v-model="form.instructions"
          label="Instructions"
          hint="Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English."
          auto-grow
          box
        />
        -->

        <!------------------------------------------------------------------------------------------------------------->

        <h3 class="mt-4 mb-2 text-xs-center">
          Solution
        </h3>

        <p>
          Challenge solution option that passes the tests.
        </p>

        <!--v-if="form.solution"-->
        <editor
          v-if="form.solution || creationMode"
          v-model="form.solution"
          :language.sync="form.solutionLanguage"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <h3 class="mt-4 mb-3 text-xs-center">
          Challenge Seed
        </h3>

        <p>
          Code displayed in the editor by default.

          <a
            href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-curriculum-challenges.md#formatting-seed-code"
            target="_blank"
          >
            See section in style guide.
          </a>
        </p>

        <!--v-if="form.challengeSeed"-->
        <editor
          v-if="form.challengeSeed || creationMode"
          v-model="form.challengeSeed"
          :language.sync="form.challengeSeedLanguage"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <before-test
          v-model="form.setup"
          :language.sync="form.setupLanguage"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <after-test
          v-model="form.teardown"
          :language.sync="form.teardownLanguage"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <tests
          :tests.sync="form.tests"
        />

        <!------------------------------------------------------------------------------------------------------------->

        <h2 class="mt-5 mb-3 text-xs-center">
          Generated

          <v-btn
            color="primary"
            small
            @click="selectResult"
          >
            <v-icon
              small
              left
            >
              file_copy
            </v-icon>

            Copy
          </v-btn>
        </h2>

        <v-card>
          <v-card-text
            ref="generatedContent"
            style="white-space: pre; overflow: auto; height: 600px;"
            @click="selectResult"
            v-text="generatedContent"
          />
        </v-card>

        <p class="mt-4">
          <v-subheader>
            What's next?
          </v-subheader>

          Paste the copied code into the appropriate Github file and make Pull Request.
        </p>
      </v-flex>
    </v-layout>

    <v-snackbar
      v-model="showCopyMsg"
      color="info"
      top
      left
    >
      <v-icon>
        file_copy
      </v-icon>

      Please copy the text manually.
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import jsYaml from 'js-yaml'
import { EDITOR_LANGUAGES } from '~/config'
import HtmlDecoder from '~/modules/HtmlDecoder'
import Generator from '~/modules/Generator'
import PrimaryInfoParser from '~/modules/PrimaryInfoParser'
import Editor from '~/components/Editor'
import BeforeTest from '~/components/BeforeTest'
import AfterTest from '~/components/AfterTest'
import Tests from '~/components/Tests'

const initForm = {
  title: null,
  id: null,
  challengeType: null,
  videoUrl: null,
  description: null,
  instructions: null,
  solution: null,
  solutionLanguage: EDITOR_LANGUAGES[0],
  challengeSeed: null,
  challengeSeedLanguage: EDITOR_LANGUAGES[0],
  setup: null,
  setupLanguage: EDITOR_LANGUAGES[0],
  teardown: null,
  teardownLanguage: EDITOR_LANGUAGES[0],
  tests: []
}

export default {
  components: { Editor, BeforeTest, AfterTest, Tests },
  data () {
    return {
      EDITOR_LANGUAGES,
      editMode: false,
      creationMode: false,
      showCopyMsg: false,
      wantToAddTeardown: false,
      githubFileURL: 'https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/01-responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item.english.md',
      fileContent: null,
      form: initForm,
      editors: {
        solution: {
          editorInstance: null,
          model: null
        },
        challengeSeed: {
          editorInstance: null,
          model: null
        },
        setup: {
          editorInstance: null,
          model: null
        },
        teardown: {
          editorInstance: null,
          model: null
        }
      },
      loading: false,
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
    generatedContent () {
      return Generator.generate({
        title: this.form.title || '',
        id: this.form.id || '',
        challengeType: this.form.challengeType === null ? '' : this.form.challengeType,
        videoUrl: this.form.videoUrl || '',
        description: this.form.description || '',
        instructions: this.form.instructions || '',
        solution: this.form.solution || '',
        solutionLanguage: this.form.solutionLanguage,
        challengeSeed: this.form.challengeSeed || '',
        challengeSeedLanguage: this.form.challengeSeedLanguage,
        setup: this.form.setup || '',
        setupLanguage: this.form.setupLanguage,
        teardown: this.form.teardown || '',
        teardownLanguage: this.form.teardownLanguage,
        tests: this.form.tests
      })
    },
    domFileContent () {
      if (process.client) {
        return new DOMParser().parseFromString(this.fileContent, 'text/html')
      }

      return null
    },
    primaryInfo () {
      if (!this.fileContent) return

      return PrimaryInfoParser.parse(this.fileContent)
    },
    description () {
      return HtmlDecoder.decode(
        this.getPartInParsedDom('#description').innerHTML.trim()
      )
    },
    instructions () {
      return HtmlDecoder.decode(
        this.getPartInParsedDom('#instructions').innerHTML.trim()
      )
    },
    solution () {
      return this.prepareContentOfSection(this.getPartInParsedDom('#solution'))
    },
    challengeSeed () {
      return this.prepareContentOfSection(this.getPartInParsedDom('[id*="-seed"]'))
    },
    setup () {
      return this.prepareContentOfSection(this.getPartInParsedDom('[id*="-setup"]'))
    },
    teardown () {
      return this.prepareContentOfSection(this.getPartInParsedDom('[id*="-teardown"]'))
    },
    fileContentTests () {
      const yamlContent = this.prepareContentOfSection(this.getPartInParsedDom('#tests'))

      if (!yamlContent) return

      const parsedYaml = jsYaml.load(yamlContent.content)

      if (!parsedYaml.tests) {
        console.log('Here the parsed yaml', parsedYaml)
        throw Error('Could not parse tests (yaml file). Need to have a key "tests".')
      }

      return parsedYaml.tests
    }
  },
  watch: {
    form: {
      deep: true,
      async handler () {
        await this.setResult(this.generatedContent)
      }
    },
    creationMode (val) {
      if (!val) {
        this.form = initForm
      }
    }
  },
  methods: {
    ...mapActions(['setResult']),
    async parseURL () {
      await this.setResult('')

      const prefix = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/curriculum/challenges/'
      // const url = prefix + 'english/02-javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter.english.md'
      const urlStrStart = 'challenges/'
      const sliced = this.githubFileURL.slice(
        this.githubFileURL.indexOf(urlStrStart) + urlStrStart.length,
        this.githubFileURL.indexOf('.md') + 3)
      const url = prefix + sliced

      if (!sliced) {
        const correctURL = 'https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/01-responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item.english.md'

        return alert(`Incorrect address provided. Example of correct URL: "${correctURL}".`)
      }

      // console.log('url', sliced, url)

      // prefix + 'english/01-responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item.english.md'

      // console.log(1, await this.$axios.$get('api/users'))
      // console.log(2, await (await fetch('http://localhost:3000/api/users')).json())
      this.loading = true
      const response = await (await fetch(url, {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      })).json()

      if (!response.content) {
        return alert('Failed to get the file.')
      }

      this.loading = false
      this.fileContent = atob(response.content)

      console.log({ content: this.fileContent })

      await this.$nextTick()

      this.form.title = this.primaryInfo.title
      this.form.id = this.primaryInfo.id
      this.form.challengeType = +this.primaryInfo.challengeType
      this.form.videoUrl = this.primaryInfo.videoUrl
      this.form.description = this.description
      this.form.instructions = this.instructions
      this.form.tests = this.fileContentTests

      if (this.solution) {
        this.form.solutionLanguage = this.solution.language
        this.form.solution = this.solution.content
      }
      if (this.challengeSeed) {
        this.form.challengeSeedLanguage = this.challengeSeed.language
        this.form.challengeSeed = this.challengeSeed.content
      }
      if (this.teardown) {
        this.form.teardownLanguage = this.teardown.language
        this.form.teardown = this.teardown.content
      }
      if (this.setup) {
        this.form.setupLanguage = this.setup.language
        this.form.setup = this.setup.content
      }
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
        code = el.innerHTML
      } else {
        const xpath = `//*[contains(text(),'${searchStr}')]`
        const matchingElement = document.evaluate(xpath, el, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

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
    },
    setRandomId () {
      const strLength = 24
      this.form.id = [...Array(strLength)].map(() => Math.random().toString(36)[3]).join('')
    },
    selectResult () {
      window.getSelection().selectAllChildren(this.$refs.generatedContent)

      this.showCopyMsg = true
    }
  }
}
</script>
