<template>
  <div>
    <h3 class="mt-4 mb-3 text-xs-center">
      Before Test
    </h3>

    <p>
      Optional Test setup code.
    </p>

    <v-layout
      v-if="wantToAddSetup"
      align-center
    >
      <v-btn
        color="error"
        @click="wantToAddSetup = false; $emit('input', null)"
      >
        <v-icon left>
          delete
        </v-icon>
        Delete this section
      </v-btn>
    </v-layout>

    <v-expand-transition>
      <editor
        v-if="value || wantToAddSetup"
        :value="value"
        :language="language"
        class="slide-y-transition"
        @input="$emit('input', arguments[0])"
        @update:language="$emit('update:language', arguments[0])"
      />
      <template v-else>
        <v-layout align-center>
          <v-alert
            :value="true"
            class="grow"
            color="info"
          >
            This section is empty, it is not mandatory.
          </v-alert>

          <v-btn
            color="success"
            @click="wantToAddSetup = true"
          >
            <v-icon left>
              add
            </v-icon>
            Add
          </v-btn>
        </v-layout>
      </template>
    </v-expand-transition>
  </div>
</template>

<script>
import Editor from '~/components/Editor'

export default {
  components: { Editor },
  props: {
    value: {
      type: String,
      default: null
    },
    language: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      wantToAddSetup: false
    }
  }
}
</script>
