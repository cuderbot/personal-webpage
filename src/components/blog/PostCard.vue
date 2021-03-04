<template>
  <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
    <nuxt-link :to="link">
      <article class="card">
        <div class="card-content">
          <div class="content">
            <h3 class="is-subtitle">{{ title }}</h3>
            <p>
              {{ content }}
            </p>
          </div>
          <div class="level">
            <div class="level-right">
              <time datetime="20-12-2020">{{ publishedDate }}</time>
            </div>
          </div>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
  },
}
</script>
