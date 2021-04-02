<template>
  <main class="container w-full md:max-w-3xl mx-auto pt-20">
    <article
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <!--Title-->
      <div class="font-sans">
        <p class="text-base md:text-sm text-green-500 font-bold">
          &lt;
          <nuxt-link
            to="/blog"
            class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            Regresar al blog
          </nuxt-link>
        </p>
        <h1
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >
          {{ article.title }}
        </h1>
        <span class="text-sm md:text-base font-normal text-gray-600">
          Publicado el {{ computedPublishedDate }}
        </span>
      </div>

      <!--Post Content-->
      <nuxt-content :document="article" />

      <!--/ Post Content-->
    </article>

    <!--Tags -->
    <Tags />

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

    <!--Subscribe-->
    <Subscriber />
    <!-- /Subscribe-->

    <!--Author-->
    <Author />
    <!--/Author-->

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

    <!--Next & Prev Links-->
    <NextPrevLink />
    <!--/Next & Prev Links-->
  </main>
</template>

<script>
import Author from '@/components/blog/author.vue'
import Subscriber from '@/components/blog/subscriber'
import NextPrevLink from '@/components/blog/next-prev-link'
import Tags from '@/components/blog/tags'

export default {
  components: { Author, NextPrevLink, Subscriber, Tags },
  methods: {
    backToBlog() {
      this.$router.back()
    },
  },
  computed: {
    computedPublishedDate() {
      return new Date(this.article.createdAt).toLocaleDateString()
    },
  },
  head() {
    return {
      title: `JaviDev | ${this.article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>

<style>
.nuxt-content p {
  @apply py-6;
}

.nuxt-content a {
  @apply text-green-500 no-underline;
}

.nuxt-content a:hover {
  @apply underline;
}

.nuxt-content h1,
h2,
h3,
h4,
h5,
h6 {
  @apply py-2 font-sans;
}

.nuxt-content li {
  @apply py-3;
}
</style>
