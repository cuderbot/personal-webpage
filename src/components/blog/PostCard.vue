<template>
  <div class="column">
    <img />
    <div class="tags">
      <button
        v-for="(tag, index) in tags"
        :key="index"
        class="button tag is-light"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    tags: {
      type: Array,
      required: false,
      default() {
        return Array.of([])
      },
    },
  },
}
</script>
