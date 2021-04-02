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

      <nav
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
              href="#"
              >Active</a
            >
          </li>
          <NavItem
            v-for="nav in navigation"
            :key="nav.label"
            :label="nav.label"
            :link="nav.link"
          />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './logo'
import NavItem from './nav-item'

export default {
  name: 'Header',
  components: { Logo, NavItem },
  data() {
    return {
      navigation: [
        {
          label: 'Proyectos',
          link: 'proyectos',
        },
        {
          label: 'Blog',
          link: 'blog',
        },
        {
          label: 'Contacto',
          link: 'contacto',
        },
      ],
    }
  },
  mounted() {
    const h = document.documentElement
    const body = document.body
    const progress = document.querySelector('#progress')
    let scroll = undefined
    let scrollpos = window.scrollY
    let header = document.getElementById('header')
    const navcontent = document.getElementById('nav-content')

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
}
</script>
