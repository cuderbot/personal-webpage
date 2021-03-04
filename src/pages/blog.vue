<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-body">
          <h1 class="title">Blog</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns is-multiline">
          <post-card
            v-for="(post, index) in posts"
            :key="index"
            :title="post.title"
            :content="post.content"
            :link="post.link"
            :published-date="post.publishedDate"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PostCard from '@/components/blog/PostCard.vue'

export default {
  components: { PostCard },
  data() {
    return {
      posts: [
        {
          title: 'Getting started',
          content: `This is a starter template for creating a beautiful, customizable
            blog with minimal effort. You’ll only have to change a few settings
            and you’re ready to go. As with all Jigsaw sites, configuration
            settings can be found in config`,
          publishedDate: 'Dec 22, 2020',
          link: '/post/getting-started',
        },
        {
          title: 'Getting started',
          content: `This is a starter template for creating a beautiful, customizable
            blog with minimal effort. You’ll only have to change a few settings
            and you’re ready to go. As with all Jigsaw sites, configuration
            settings can be found in config`,
          publishedDate: 'Dec 22, 2020',
          link: '/post/getting-started',
        },
        {
          title: 'Getting started',
          content: `This is a starter template for creating a beautiful, customizable
            blog with minimal effort. You’ll only have to change a few settings
            and you’re ready to go. As with all Jigsaw sites, configuration
            settings can be found in config`,
          publishedDate: 'Dec 22, 2020',
          link: '/post/getting-started',
        },
        {
          title: 'Getting started',
          content: `This is a starter template for creating a beautiful, customizable
            blog with minimal effort. You’ll only have to change a few settings
            and you’re ready to go. As with all Jigsaw sites, configuration
            settings can be found in config`,
          publishedDate: 'Dec 22, 2020',
          link: '/post/getting-started',
        },
      ],
    }
  },
}
</script>
