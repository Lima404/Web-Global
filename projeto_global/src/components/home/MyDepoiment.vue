<template lang="pt-br">
    <section class="depoiment-container">
        <div class="container depoiment">
            <MyCard
            :i="index"
            :length="vat.length"
            :name="vat[index].name"
            :office="vat[index].office"
            :city="vat[index].city"
            :coment="vat[index].coment"
            :caminhoImage="vat[index].caminhoImage"
            @next="index = $event"
            />
            <div class="nichos">
                <h3>QUEM SOMOS</h3>
            </div>
        </div>
    </section>
</template>
<script>
    import MyCard from '../depoimentos/MyCard.vue'
export default {
    components: { MyCard },
    data() {
        return {
            index: 0,
            vat:[
                {
                    name: "Denise Silva",
                    office: "Farma mais ",
                    city: "Santa Cruz/RN",
                    coment: "A Equipe da Global faz parte do nascimento da Farma Mais... Ter começado certo e com as pessoas certas fez toda a diferença para hoje estarmos consolidados em nosso ramo. A Equipe da Global é especialista em transformar empresas e pessoas... É especialista em transformar vidas.",
                    caminhoImage: "../../assets/dep/denise.svg"
                },
                {
                    name: "Nara Luiza",
                    office: "Lovisa",
                    city: "Currais Novos/RN",
                    coment: "Há 3 anos tive a sensação de conhecer a Global, uma empresa que se tornou um divisor de águas em minha vida. Eu sou só gratidão pela Global fazer parte dos meus negócios. Caminhar com vocês é ter a certeza de uma trajetória mais segura, com menos risco de errar e com resultados mais incríveis.",
                    caminhoImage: "../../assets/dep/denise.svg"
                },
                {
                    name: "Ednalva e Joel",
                    office: "Bendita Luz/Festa Mania",
                    city: "Parelhas/RN",
                    coment: "Foi no aniversário de 10 anos dessa empresa que começamos uma jornada linda, onde na pessoa de Adriana e Dayanna que temos um carinho que vai além do empresarial... Elas acreditam e lutam pelos nossos sonhos, sempre acreditam que podemos ir bem mais longe do que muitas vezes achamos que iremos...",
                    caminhoImage: "../../assets/dep/denise.svg"
                }
            ]
        }
    },
}
</script>
<style scoped>

    .depoiment-container{
            background-color: #002647;
        }

    .depoiment{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nichos{
        height: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
    }
        
    h3{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 45px;
        color: #002647;


        width: 60px;
        height: 40px;


        font-family: 'inter';
        text-align: center;
        font-style: normal;
        font-weight: 800;
        font-size: 1.2rem;

        background: #E6C772;
        box-shadow: 0px 2px 4px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        border-radius: 10px;
    }

</style>