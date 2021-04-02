<template>
  <main class="container w-full md:max-w-3xl mx-auto pt-20">
    <section class="section">
      <div class="container">
        <h1 class="title">Blog</h1>
        <form>
          <input type="search" v-model="search" />
        </form>
      </div>
    </section>
    <section class="section" v-if="articles.length">
      <div class="container">
        <PostCard
          v-for="article in articles"
          :key="article.slug"
          :title="article.title"
          :link="article.slug"
          :description="article.description"
          :tags="article.categories.split(',')"
          :createdAt="article.createdAt"
        />
      </div>
    </section>
  </main>
</template>

<script>
import PostCard from '@/components/blog/post-card.vue'

export default {
  name: 'blog',
  components: { PostCard },
  data() {
    return {
      search: '',
      selected: null,
    }
  },
  computed: {
    filteredTitles() {
      const titles = this.articles.map((article) => article.title)
      return titles.filter(
        (option) =>
          option.toString().toLowerCase().indexOf(this.search.toLowerCase()) >=
          0
      )
    },
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles }
  },
}
</script>
