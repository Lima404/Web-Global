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
    nome : "pefil3",
    data() {
        return {
            name: "Ednalva e Joel",
            office: "Bendita Luz/Festa Mania",
            city: "Parelhas/RN",
            coment: "Foi no aniversário de 10 anos dessa empresa que começamos uma jornada linda, onde na pessoa de Adriana e Dayanna que temos um carinho que vai além do empresarial... Elas acreditam e lutam pelos nossos sonhos, sempre acreditam que podemos ir bem mais longe do que muitas vezes achamos que iremos...",
            caminhoImage: "../../assets/dep/denise.svg"
        }
    },
    
}
</script>
<style scoped>
    
</style>