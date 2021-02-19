<template>
  <main>
    <Navbar />
    <nuxt />
  </main>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>
