<template>
  <header class="container">
    <b-navbar type="is-white">
      <template #end>
        <b-navbar-item
          tag="nuxt-link"
          v-for="(nav, index) in navigation"
          :key="index"
          :to="`/${nav.link}`"
        >
          {{ nav.label }}
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navigation: [
        {
          label: 'Proyectos',
          link: 'proyectos',
        },
        {
          label: 'Blog',
          link: 'blog',
        },
        {
          label: 'Contacto',
          link: 'contacto',
        },
      ],
    }
  },
}
</script>
