<template lang="pt-br">
  <header>
    <navbar></navbar>
  </header>
    <MyHero></MyHero>
    <MyService></MyService>
    <MyDepoiment></MyDepoiment>
    <MyAbout></MyAbout>
    <MyCliente></MyCliente>
  <footer>
    <Footer></Footer>
  </footer>
</template>
<script>
import navbar from "./components/navbar.vue"
import Footer from "./components/Footer.vue"
import MyHero from "./components/views/MyHero.vue"
import MyService from "./components/views/MyService.vue"
import MyDepoiment from "./components/views/MyDepoiment.vue"
import MyAbout from "./components/views/MyAbout.vue"
import MyCliente from "./components/views/MyCliente.vue"
export default {
  components:{ navbar, Footer, MyHero, MyService, MyDepoiment, MyAbout, MyCliente }
}
</script>
<style lang="">
  
</style>