<template>
  <nav
    class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
    id="nav-content"
  >
    <ul class="list-reset lg:flex justify-end flex-1 items-center">
      <NavItem
        v-for="nav in navigation"
        :key="nav.label"
        :label="nav.label"
        :link="nav.link"
        :isSelected="nav.link === selected"
        @click="(label) => onSelected(label)"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from './nav-item'

export default {
  name: 'NavigationBar',
  components: { NavItem },
  data() {
    return {
      selected: this.$route.name,
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
  methods: {
    onSelected(label) {
      this.selected = label
    },
  },
}
</script>
