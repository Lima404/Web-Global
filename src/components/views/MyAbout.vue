    <template lang="pt-br">
    <section class="about-container">
        <div class="container about">
            <div class="base">
                <div class="buttons">
                    <div class="box">
                        <div class="linha">
                            <div class="card">
                                <p class="but">VALORES</p>
                                <p class="text1">Comprometimento, humanização, responsabilidade, transparência e ética.</p>
                            </div>
                            <div class="card">
                                <p class="but">VISÃO</p>
                                <p class="text">Ser referência como uma agência completa em serviços empresariais.</p>
                            </div>
                            <div class="card">
                                <p class="but">MISSÃO</p>
                                <p class="text">Impactar positivamente a vida de pessoas e de negócios.</p>
                            </div>
                        </div>
                        <p class="but">HISTÓRIA</p>
                        <div class="hist">
                            <div>
                                <p class="boxh">A Global surgiu a partir de um trabalho da faculdade de administração na UFRN, quando a CEO Adriana Souza juntamente com colegas criaram uma Empresa de Consultoria – A GLOBAL.

                                    O que surgiu como um trabalho acadêmico logo se tornou realidade quando a então aluna de administração, começou a realizar serviços no sentido de contribuir com o sucesso de pessoas e negócios.
                                    
                                    Logo em seguida a empresa foi formalizada e passou a atuar em todo o Rio Grande do Norte atendendo empresas dos mais diversos segmentos.
                                    
                                    Em 2019, Adriana fez a formação em Mentoring impulsionando ainda mais os resultados dos clientes ao utilizar ferramentas modernas e extraem todo o potencial empreendedor de pessoas dedicadas aos seus negócios.
                                    
                                    Hoje a Global é formada pelas áreas de gestão, marketing e finanças com Adriana Souza à frente; Dayanna Soares com liderança, gestão de pessoas, treinamentos e psicanálise;  a área de marketing digital e design gráfico com Kelciano Douglas.
                                    
                                    A Global é referência em todo o Nordeste quando se fala em Consultoria, Treinamentos, Gestão e Mentoria para empresas de pequeno/médio porte, profissionais liberais e gestores.
                                </p>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
            <div class="nichos">
                <h2 id="cliente">NOSSOS CLIENTES</h2>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .about-container{
        background-color: #b4b3b3;
        padding: 100px 70px 0px;
    }

    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    h2{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 45px;
        color: #002647;


        width: 110px;
        height: 40px;


        font-family: 'inter';
        text-align: center;
        font-style: normal;
        font-weight: 800;
        font-size: 1.25rem;

        background: #E6C772;
        box-shadow: 0px 2px 4px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        border-radius: 10px;
    }

    .base{
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        gap: 10px;
    }

    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 156px;
    }

    .primeiro{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 150px;
    }

    .ultimo{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 130px;
    }

    .but{
        justify-content: center;
        align-items: center;
        display: flex;
        
        
        background: #E6C772;
        color: #002647;
        box-shadow: 0px 10px 15px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        border-radius: 4px;
        padding: 20px 40px;
        width: 100px;
        

        font-family: 'inter';
        font-style: bold;
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
    }

    .box{
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        justify-content: center;
        font-family: 'inter';
        font-weight: 400;
    }

    .text{
        background: #002647;
        border-radius: 20px;
        box-shadow: 0px 10px 15px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        text-align: center;
        padding: 40px 30px;
        width: 200px;
    }

    .text1  {
        background: #002647;
        border-radius: 20px;
        box-shadow: 0px 10px 15px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        text-align: center;
        padding: 32px 30px;
        width: 200px;
    }

    .boxh{
        display: flex;
        flex-direction: column;
        background: #002647;
        border-radius: 20px;
        text-align: justify;
        margin-top: 10px;
        line-height: 20px;
        padding: 40px 30px;
        width: 820px;
        gap: 50px;
    }

    .hist{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 40px;
    }
    
    .nichos{
        height: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 250px;
        z-index: 5;
    }

    .txt{
        font-size: 14px;
    }

    .linha{
        display: flex;
        gap: 50px;
        padding-bottom: 40px;
    }

    @media(max-width:910px){
        
        .linha{
            display: flex;
            flex-direction: column;
        }

        .boxh{
            max-width: 500px;
        }
    }

    @media(max-width:414px){

        .boxh{
            max-width: 300px;
        }
    }




    


    
    
</style>