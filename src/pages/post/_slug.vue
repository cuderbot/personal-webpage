<template>
  <main>
    <section>
      <h1>Post {{ slug }}</h1>
    </section>
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
