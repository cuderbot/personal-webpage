<template>
  <section class="section">
    <h1 class="title">Blog</h1>
    <div class="container">
      <div class="columns is-multiline">
        <post-card
          v-for="post in posts"
          :key="post.key"
          :name="post.name"
          :tags="post.tags"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from '@/components/blog/PostCard.vue'

export default {
  name: 'BlogPage',
  components: { PostCard },
  data() {
    return {
      posts: [
        {
          key: 0,
          name: '',
          tags: ['getting-started', 'test'],
        },
      ],
    }
  },
}
</script>
