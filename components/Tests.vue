<template>
  <div>
    <h3 class="mt-4 mb-3 text-xs-center">
      Tests
    </h3>

    <div class="text-xs-center">
      <v-btn
        v-if="testsItems.length"
        color="primary"
        small
        @click="show = !show"
      >
        <v-icon left>
          {{ show ? 'visibility_off' : 'visibility' }}
        </v-icon>

        {{ show ? 'Hide' : 'Show' }}
      </v-btn>

      <v-btn
        color="success"
        small
        @click="addTest"
      >
        <v-icon left>
          add
        </v-icon>

        Add
      </v-btn>
    </div>

    <v-alert
      :value="!testsItems.length"
      color="info"
    >
      There are no tests for this challenge.
    </v-alert>

    <v-expand-transition>
      <div v-if="show">
        <v-slide-y-transition
          tag="div"
          group
        >
          <div
            v-for="(test, i) of testsItems"
            :key="test.key"
            class="mt-5"
          >
            <v-layout>
              <v-text-field
                v-model="test.text"
                label="Text"
              />

              <v-btn
                color="error"
                small
                left
                @click="deleteTest(i)"
              >
                <v-icon
                  small
                  left
                >
                  delete
                </v-icon>

                Delete
              </v-btn>
            </v-layout>

            <editor
              v-model="test.testString"
              :editor-style="{
                height: '150px'
              }"
              disable-language-selection
              language="javascript"
            />
          </div>
        </v-slide-y-transition>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import Editor from '~/components/Editor'

export default {
  components: { Editor },
  props: {
    tests: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      show: true,
      testsItems: []
    }
  },
  watch: {
    tests (val) {
      if (!val) return

      this.testsItems = val.map(i => {
        if (!i.key) {
          i.key = this.generateKey()
        }

        return i
      })
    }
  },
  methods: {
    addTest () {
      this.testsItems.unshift({
        key: this.generateKey(),
        text: '',
        testString: ''
      })

      this.$emit('update:tests', this.testsItems)
    },
    deleteTest (index) {
      this.testsItems.splice(index, 1)

      this.$emit('update:tests', this.testsItems)
    },
    generateKey () {
      return 'test-' + Date.now() * Math.random()
    }
  }
}
</script>
