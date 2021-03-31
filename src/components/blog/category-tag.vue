<template>
  <span class="tag is-rounded" :class="computedClass">{{ title }}</span>
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
  data() {
    return {
      colors: [
        'is-black',
        'is-dark',
        'is-primary',
        'is-info',
        'is-success',
        'is-warning',
        'is-danger',
      ],
    }
  },
  computed: {
    computedClass() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },
  },
}
</script>
