<template>
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <div class="container content">
            <h1 class="title is-1">Contacto</h1>
            <p>¿Estas búscando a alguien con mis habilidades? Contactamé 😁</p>
          </div>
        </div>
        <div class="column is-5">
          <form @submit.prevent="onContact">
            <b-field label="tu correo">
              <b-input v-model="email" type="email" />
            </b-field>
            <b-field label="agrega algún mensaje!">
              <b-input v-model="message" type="textarea" />
            </b-field>
            <b-field>
              <b-input type="submit" label="Enviar" />
            </b-field>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      email: '',
      message: '',
    }
  },
  methods: {
    onContact() {
      return null
    },
  },
}
</script>
