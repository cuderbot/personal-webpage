<template>
  <main>
    <section class="hero">
      <div class="container">
        <h1 class="title">Buenas! Me llamo Javier Becerra.</h1>
        <p class="subtitle">y soy desarrollador.</p>
      </div>
    </section>
    <section id="about-me" class="section">
      <div class="container">
        <div class="content is-medium">
          <h1>Sobre mí...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat
            platea interdum primis, fames sapien odio tempus donec sed tellus
            vel sociis condimentum, ut velit facilisis senectus porta curabitur
            diam tortor leo lacus. Rhoncus tempor risus luctus cursus tincidunt
            placerat vestibulum, urna litora laoreet diam dis quisque, morbi
            quis parturient elementum tellus etiam. Justo netus sodales
            tristique tellus quisque potenti facilisis porttitor, habitasse non
            cum vel montes auctor aenean faucibus purus, aliquet urna placerat
            dapibus quis taciti est.
          </p>
          <p>
            Morbi praesent class eleifend curae sed mi torquent eu convallis,
            quam facilisis nisl eros risus ultricies tristique primis, proin
            bibendum quis rhoncus sapien tempor facilisi cubilia. Ad inceptos
            felis volutpat imperdiet maecenas blandit, neque non parturient
            primis fringilla malesuada vestibulum, proin tempor pulvinar tellus
            quis. Vulputate pulvinar ridiculus sapien montes litora penatibus
            ligula nascetur, ullamcorper libero nec tristique egestas risus
            primis sociosqu, pellentesque senectus et molestie inceptos enim
            turpis.
          </p>
        </div>
      </div>
    </section>
    <section id="contact-me" class="section is-medium">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <div class="container content">
              <h1 class="title is-1">Contacto</h1>
              <p>
                ¿Estas búscando a alguien con mis habilidades? Contactamé 😁
              </p>
            </div>
          </div>
          <div class="column is-5">
            <form class="box">
              <b-field label="Tu nombre">
                <b-input />
              </b-field>
              <b-field label="Tu correo de contacto">
                <b-input />
              </b-field>
              <b-field label="agrega algún mensaje">
                <b-input type="textarea" />
              </b-field>
              <b-field>
                <b-button type="is-success" native-type="submit">
                  Enviar
                </b-button>
              </b-field>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
