<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>

        <!--TODO show if fileContent loaded-->
        <v-fab-transition>
          <v-btn
            v-if="result"
            color="pink"
            dark
            fixed
            bottom
            right
            large
            @click.stop="drawer = !drawer"
          >
            <v-icon left>
              visibility
            </v-icon>

            Show result
          </v-btn>
        </v-fab-transition>

        <v-navigation-drawer
          v-model="drawer"
          width="1200"
          style="overflow-x: auto; padding: 20px;"
          fixed
          temporary
        >
          <h2>
            Current challenge result
          </h2>

          <!--TODO v-html with markdown parsed-->
          <pre
            style="overflow-x: visible;"
            v-text="result"
          />

          <!--
          <v-divider />

          <h2 class="my-3">
            Your latest challenges
          </h2>
          <v-list
            class="pt-0"
            dense
          >
            <v-list-tile
              v-for="(item, i) in items"
              :key="'item' + i"
              @click="() => {}"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Challenge {{ i }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          -->
        </v-navigation-drawer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// import marked from 'marked'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      resultRaw: `
---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
---

## Description
<section id='description'>
We can access the data inside arrays using <code>indexes</code>.
Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array is element <code>0</code>.
<br />
<strong>Example</strong>
<blockquote>var array = [50,60,70];<br>array[0]; // equals 50<br>var data = array[1];  // equals 60</blockquote>
<strong>Note</strong><br>There shouldn't be any spaces between the array name and the square brackets, like <code>array [0]</code>. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
</section>

## Instructions
<section id='instructions'>
Create a variable called <code>myData</code> and set it to equal the first value of <code>myArray</code> using bracket notation.
</section>

## Tests
<section id='tests'>

\`\`\`yml
tests:
  - text: The variable <code>myData</code> should equal the first value of <code>myArray</code>.
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})(), 'The variable <code>myData</code> should equal the first value of <code>myArray</code>.');
  - text: The data in variable <code>myArray</code> should be accessed using bracket notation.
    testString: assert((function(){if(code.match(/\\s*=\\s*myArray\\[0\\]/g)){return true;}else{return false;}})(), 'The data in variable <code>myArray</code> should be accessed using bracket notation.');

\`\`\`

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

\`\`\`js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

\`\`\`

</div>


### After Test
<div id='js-teardown'>

\`\`\`js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
\`\`\`

</div>

</section>

## Solution
<section id='solution'>


\`\`\`js
var myArray = [50,60,70];
var myData = myArray[0];
\`\`\`

</section>

      `
    }
  },
  computed: {
    ...mapState({
      storeResult: 'result'
    }),
    result () {
      return this.storeResult // marked(this.resultRaw)
    }
  }
}
</script>

<style>
  .v-navigation-drawer__border {
    background-color: unset !important;
  }
</style>
