<template lang="pt-br">
    <section class="denis-container">
        <div class="container denise">
            <div class="content">
                <div class="text">
                    <img src="../../assets/dep/Vector.svg" alt="">
                    <div class="dep">
                        <div>
                            <p class="lib">{{coment}}</p>
                        </div>
                        <div>
                            <p class="name-person">{{name}}</p>
                            <p class="name-person">{{office}} / {{city}}</p>   
                        </div>
                    </div>
                </div>
                <div id="pic">
                    <img v-bind="caminhoImage" alt="Minha Imagem">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    nome: 'perfil2',
    data() {
        return {
            name: "Nara Luiza",
            office: "Lovisa",
            city: "Currais Novos/RN",
            coment: "Há 3 anos tive a sensação de conhecer a Global, uma empresa que se tornou um divisor de águas em minha vida. Eu sou só gratidão pela Global fazer parte dos meus negócios. Caminhar com vocês é ter a certeza de uma trajetória mais segura, com menos risco de errar e com resultados mais incríveis.",
            caminhoImage: "../../assets/dep/denise.svg"
        }
    },
    
}
</script>
<style scoped>
    
    
</style>