<template>
  <main>
    <section class="section">
      <div class="container py-4">
        <div class="columns">
          <div class="column is-6">
            <h4 class="title is-spaced is-4">
              ¿Quieres desarrollar algún proyecto ó estás buscando alguien con
              mis habilidades?
            </h4>
            <p class="subtitle">Contactamé 😁</p>
          </div>
          <div class="column is-5 is-offset-1">
            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="email"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="5"
                    placeholder="Escribeme un mensaje"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary is-fullwidth" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
