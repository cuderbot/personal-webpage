<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form class="box" @submit.prevent="onLogin">
          <b-field label="Correo electrónico">
            <b-input
              type="email"
              placeholder="ej. test@test.com"
              :required="true"
            />
          </b-field>
          <b-field label="Contraseña">
            <b-input type="password" placeholder="*******" :required="true" />
          </b-field>
          <b-field>
            <div class="buttons">
              <b-button type="is-success">Ingresar</b-button>
              <b-button type="default">Atrás</b-button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'login',
  methods: {
    onLogin() {
      return null
    },
  },
}
</script>
