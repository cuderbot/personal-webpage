<template>
  <li class="mr-3">
    <nuxt-link class="nav-item-label" :to="link">
      {{ label }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.nav-item-label {
  @apply inline-block text-gray-600 no-underline py-2 px-4;
}

.nav-item-label:hover {
  @apply text-gray-900 underline;
}
</style>
