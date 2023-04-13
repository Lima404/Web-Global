<template lang="pt-br">
  <header>
    <navbar></navbar>
  </header>
    <MyHero></MyHero>
    <MyBody></MyBody>
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
import MyBody from "./components/home/MyBody.vue"
import MyDepoiment from "./components/home/MyDepoiment.vue"
import MyAbout from "./components/home/MyAbout.vue"
import MyCliente from "./components/home/MyCliente.vue"
export default {
  components:{ navbar, Footer, MyHero, MyBody, MyDepoiment, MyAbout, MyCliente }
}
</script>
<style lang="">
  
</style>