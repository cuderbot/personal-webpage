<template>
  <header id="header" class="fixed w-full z-10 top-0">
    <div
      id="progress"
      class="h-1 z-20 top-0"
      style="
        background: linear-gradient(
          to right,
          #4dc0b5 var(--scroll),
          transparent 0
        );
      "
    ></div>

    <div
      class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3"
    >
      <Logo />

      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <NavigationBar />
    </div>
  </header>
</template>

<script>
import Logo from './logo'
import NavigationBar from './nav-bar'

export default {
  name: 'Header',
  components: { Logo, NavigationBar },
  methods: {
    progressBar() {
      var h = document.documentElement,
        body = document.body,
        progress = document.querySelector('#progress'),
        scroll = undefined,
        scrollpos = window.scrollY,
        header = document.getElementById('header'),
        navcontent = document.getElementById('nav-content')

      document.addEventListener('scroll', function () {
        /*Refresh scroll % width*/
        scroll =
          ((h['scrollTop'] || body['scrollTop']) /
            ((h['scrollHeight'] || body['scrollHeight']) - h.clientHeight)) *
          100
        progress.style.setProperty('--scroll', scroll + '%')

        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY

        if (scrollpos > 10) {
          header.classList.add('bg-white')
          header.classList.add('shadow')
          navcontent.classList.remove('bg-gray-100')
          navcontent.classList.add('bg-white')
        } else {
          header.classList.remove('bg-white')
          header.classList.remove('shadow')
          navcontent.classList.remove('bg-white')
          navcontent.classList.add('bg-gray-100')
        }
      })

      //Javascript to toggle the menu
      document.getElementById('nav-toggle').onclick = function () {
        document.getElementById('nav-content').classList.toggle('hidden')
      }
    },
  },
  mounted() {
    this.progressBar()
  },
}
</script>
