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
import MyHero from "./components/home/MyHero.vue"
import MyService from "./components/home/MyService.vue"
import MyDepoiment from "./components/home/MyDepoiment.vue"
import MyAbout from "./components/home/MyAbout.vue"
import MyCliente from "./components/home/MyCliente.vue"
export default {
  components:{ navbar, Footer, MyHero, MyService, MyDepoiment, MyAbout, MyCliente }
}
</script>
<style lang="">
  
</style>