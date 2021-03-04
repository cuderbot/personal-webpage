<template>
  <main>
    <article class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="image is-16by9">
                <img
                  src="~/assets/images/first-post.png"
                  alt="First post image"
                />
              </figure>
            </div>
          </div>

          <article class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <h1 class="title">Getting Started</h1>
                  <h2 class="subtitle is-4">December 25, 2018</h2>
                  <p>
                    This is a starter template for creating a beautiful,
                    customizable blog with minimal effort. You’ll only have to
                    change a few settings and you’re ready to go. As with all
                    Jigsaw sites, configuration settings can be found in config
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore dolor porro laborum debitis itaque, consequatur,
                    saepe sunt assumenda veritatis sequi impedit nostrum ipsam
                    quaerat vitae id nisi iusto facere alias?
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  asyncData({ params }) {
    const { slug } = params
    return { slug }
  },
}
</script>
