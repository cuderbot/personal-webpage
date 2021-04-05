<template>
  <footer class="bg-white border-t border-gray-400 shadow">
    <div class="container max-w-4xl mx-auto flex py-8">
      <AboutMe />
      <Socials />
    </div>
  </footer>
</template>

<script>
import AboutMe from './about-me.vue'
import Socials from './socials.vue'

export default {
  name: 'Footer',
  components: { AboutMe, Socials },
}
</script>
