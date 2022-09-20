<template>
  <div>
    <template v-if="isSaved">
      <h1>This system saved the number.</h1>
    </template>
    <div>{{ number }}</div>
    <v-btn @click="countup">increment</v-btn>
    <v-btn @click="save">save</v-btn>
    <v-btn @click="reset">Reset</v-btn>
    <v-btn @click="resetStash">ResetStash</v-btn>
    <v-btn @click="load">LoadStash</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    number() {
      return this.$accessor.count.getCount
    },
    isSaved() {
      return this.$accessor.stash.isStash
    },
  },
  methods: {
    countup() {
      this.$accessor.count.incrementCount()
    },
    save() {
      this.$accessor.count.toStash(this.$accessor.count.count)
    },
    reset() {
      this.$accessor.count.setCount(0)
    },
    resetStash() {
      this.$accessor.stash.clearStashNumber()
    },
    load() {
      this.$accessor.count.setCount(this.$accessor.stash.getStash)
    },
  },
})
</script>

<style></style>
