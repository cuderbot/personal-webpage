<template>
  <main>
    <section class="section">
      <div class="container">
        <h1 class="title">Blog</h1>
        <form>
          <b-field label="Find a JS framework">
            <b-autocomplete
              rounded
              v-model="name"
              :data="filteredDataArray"
              placeholder="e.g. jQuery"
              icon="magnify"
              clearable
              @select="(option) => (selected = option)"
            >
              <template #empty>No results found</template>
            </b-autocomplete>
          </b-field>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: [
        'Angular',
        'Angular 2',
        'Aurelia',
        'Backbone',
        'Ember',
        'jQuery',
        'Meteor',
        'Node.js',
        'Polymer',
        'React',
        'RxJS',
        'Vue.js',
      ],
      name: '',
      selected: null,
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        )
      })
    },
  },
}
</script>
