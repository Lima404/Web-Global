<template lang="pt-br">
    <section class="about-container">
        <div class="container about">
            <div class="base">
                <div class="buttons">
                    <div class="primeiro">
                        <p class="but">HISÓRIA</p>
                        <p class="but">VISÃO</p>
                    </div>
                    <div class="ultimo">
                        <p class="but">MISSÃO</p>
                        <p class="but">VALORES</p>
                    </div>
                </div>
                <div class="box">
                    <div class="hist">
                        <p class="txt">A Global surgiu de um trabalho acadêmico na UFRN e se tornou uma empresa de consultoria bem-sucedida em todo o Rio Grande do Norte. A Global oferece serviços em gestão, marketing e finanças, liderança, gestão de pessoas, treinamentos, psicanálise e marketing digital. A CEO da empresa, Adriana Souza, possui formação em Mentoring e lidera a equipe da Global, que é referência em consultoria, treinamentos, gestão e mentoria para empresas de pequeno e médio porte, profissionais liberais e gestores no Nordeste.
                        </p>
                        
                    </div>
                    <p class="text">Ser referência como uma agência completa em serviços empresariais.</p>
                    <p class="text">Impactar positivamente a vida de pessoas e de negócios.</p>
                    <p class="text">Comprometimento, humanização, responsabilidade, transparência e ética.</p>
                </div>
            </div>

            <div class="nichos">
                <h2>NOSSOS CLIENTES</h2>
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
        padding: 150px 70px 0px;
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
        gap: 10px;
    }

    .buttons{
        display: flex;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 320px;
        gap: 150px;
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
        background: #E6C772;
        box-shadow: 0px 10px 15px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        border-radius: 4px;
        padding: 20px 40px;

        font-family: 'inter';
        font-style: bold;
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
    }

    .box{
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        font-family: 'inter';
        font-weight: 400;
        gap: 40px;
        padding-bottom: 100px;
    }

    .text{
        background: #002647;
        border-radius: 20px;
        box-shadow: 0px 10px 15px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
        padding: 40px 30px;
        width: 200px;
        height: 300px;
    }

    .hist{
        display: flex;
        flex-direction: column;
        background: #002647;
        border-radius: 20px;
        padding: 40px 30px;
        width: 200px;
        height: 300px;
        gap: 50px;
    }
    
    .nichos{
        height: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 250px;
    }

    .txt{
        font-size: 14px;
    }




    


    
    
</style>