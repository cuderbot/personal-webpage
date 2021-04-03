<template>
  <article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
    >
      <nuxt-link
        :to="computedSlug"
        class="flex flex-wrap no-underline hover:no-underline"
      >
        <!-- <img
          src="https://source.unsplash.com/collection/225/800x600"
          class="h-64 w-full rounded-t pb-6"
        /> -->
        <!-- <p class="w-full text-gray-600 text-xs md:text-sm px-6">
          GETTING STARTED
        </p> -->
        <h6 class="w-full font-bold text-xl text-gray-900 capitalize px-6">
          {{ title }}
        </h6>
        <p class="text-gray-800 font-serif text-base px-6 mb-5">
          {{ description }}
        </p>
      </nuxt-link>
    </div>
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
    >
      <div class="flex items-start justify-between">
        <!-- <img
          class="w-8 h-8 rounded-full mr-4 avatar"
          data-tippy-content="Author Name"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        /> -->
        <p class="text-gray-600 text-xs md:text-sm">{{ computedDate }}</p>
        <p class="text-gray-600 text-xs md:text-sm">
          {{ computedReadingTime }} min de lectura
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import CategoryTag from './category-tag.vue'

export default {
  name: 'PostCard',
  components: { CategoryTag },
  props: {
    content: {
      type: String,
      required: true,
    },
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
    computedReadingTime() {
      let minutes = 0
      const words = this.content.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    },
    computedSlug() {
      return `/blog/${this.link}`
    },
    computedDate() {
      const date = new Date(this.createdAt).toLocaleDateString()
      return `publicado el ${date}`
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
