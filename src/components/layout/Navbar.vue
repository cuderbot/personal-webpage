<template>
  <b-navbar :spaced="true">
    <template #end>
      <b-navbar-item tag="nuxt-link" to="/"> Inicio </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/proyectos"> Proyectos </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/blog"> 📚 Blog </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/contacto"> Contacto </b-navbar-item>
      <b-navbar-item href="https://github.com/cuderbot">
        <GithubIcon />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import GithubIcon from '@/components/layout/GithubIcon.vue'

export default {
  name: 'Navbar',
  components: { GithubIcon },
}
</script>
