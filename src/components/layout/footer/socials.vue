<template>
  <div class="flex w-full md:w-1/2">
    <div class="px-8">
      <h3 class="font-bold text-gray-900">Social</h3>
      <ul class="list-reset items-center text-sm pt-3">
        <li v-for="social in socials" :key="social.label">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
            :href="social.link"
          >
            {{ social.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLink',
  data() {
    return {
      socials: [
        {
          label: 'Linkedin',
          link: 'https://www.linkedin.com/in/javier-becerra-816b6716a/',
        },
        {
          label: 'Github',
          link: 'https://github.com/cuderbot',
        },
      ],
    }
  },
}
</script>
