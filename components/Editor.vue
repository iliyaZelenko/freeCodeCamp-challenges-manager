<template>
  <v-card>
    <v-card-text
      style="position: relative;"
      class="px-1"
    >
      <div
        ref="editor"
        :style="editorStyle"
        class="editor"
      />

      <v-chip
        class="language-chip"
      >
        <v-select
          class="ml-3"
          :value="language"
          :disabled="disableLanguageSelection"
          :items="EDITOR_LANGUAGES"
          @input="$emit('update:language', arguments[0])"
        />
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import { EDITOR_LANGUAGES } from '~/config'

let monaco

if (process.client) {
  monaco = require('monaco-editor')
}

export default {
  props: {
    language: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    editorStyle: {
      type: Object,
      default: null
    },
    disableLanguageSelection: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      EDITOR_LANGUAGES,
      editorInstance: null
    }
  },
  watch: {
    language (language) {
      this.setLanguage(language)
    },
    value (val) {
      if (val === this.model.getValue()) return

      this.setValue(val)
    }
  },
  mounted () {
    this.createEditor(this.value, this.language)
  },
  methods: {
    createEditor (content, language) {
      this.model = monaco.editor.createModel(
        content,
        language
      )
      this.model.onDidChangeContent(e => {
        this.$emit('input', this.model.getValue())
      })

      this.editorInstance = monaco.editor.create(this.$refs.editor, {
        model: this.model
      })
    },
    setValue (val) {
      this.model.setValue(val)
    },
    setLanguage (language) {
      monaco.editor.setModelLanguage(this.model, language)
    }
  }
}
</script>

<style>
  .language-chip {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 0;
  }

  .editor {
    width: 100%;
    max-width: 100%;
    height: 400px;
    /*border: 1px solid grey;*/
  }
</style>
