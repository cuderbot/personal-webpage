<template>
  <main>
    <section class="section">
      <div class="container">
        <h1 class="title">Blog</h1>
        <form>
          <b-field>
            <b-autocomplete
              rounded
              clearable
              icon="magnify"
              v-model="search"
              :data="filteredTitles"
              placeholder="Busca algun post"
              @select="(option) => (selected = option)"
            >
              <template #empty>No se encontro el post :(</template>
            </b-autocomplete>
          </b-field>
        </form>
      </div>
    </section>
    <section class="section" v-if="articles.length">
      <PostCard />
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
    const articles = await $content('articles').fetch()
    return { articles }
  },
}
</script>
