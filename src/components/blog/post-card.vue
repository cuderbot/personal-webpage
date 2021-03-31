<template>
  <div class="card mb-2">
    <div class="card-content">
      <div class="content">
        <h2 class="post-title">
          <nuxt-link :to="computedSlug" :title="title">
            {{ title }}
          </nuxt-link>
        </h2>
        <div class="tags">
          <CategoryTag v-for="tag in tags" :key="tag" :title="tag" />
        </div>
        <p class="sub-title">
          {{ description }}
        </p>
        <span>
          publicado el
          <time class="has-text-weight-bold" :datetime="computedDate">
            {{ computedDate }}
          </time>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTag from './category-tag.vue'

export default {
  name: 'PostCard',
  components: { CategoryTag },
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedSlug() {
      return `/blog/${this.link}`
    },
    computedDate() {
      const date = new Date(this.createdAt)
      return `${date.getDay()}/${date.getDate()}/${date.getFullYear()}`
    },
  },
}
</script>

<style scoped>
.post-card {
  cursor: pointer;
  text-decoration: none;
}

.category-row {
  display: flex;
  flex-direction: row;
}
</style>
