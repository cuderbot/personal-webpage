<template>
  <div class="card post-card mb-2">
    <div class="card-content">
      <h3 class="post-title">
        <a href="/jekyll-bulma/youtube-embed.html" :title="title">
          {{ title }}
        </a>
      </h3>
      <CategoryTag v-for="tag in tags" :key="tag" :title="tag" />
      <p class="sub-title">
        {{ description }}
      </p>
      <p>
        <small>{{ createdAt }}</small>
      </p>
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
}
</script>
