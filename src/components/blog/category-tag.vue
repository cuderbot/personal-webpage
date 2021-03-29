<template>
  <p class="post-categories">
    <span class="tag is-success">{{ title }}</span>
  </p>
</template>

<script>
export default {
  name: 'CategoryTag',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
