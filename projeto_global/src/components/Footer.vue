<template lang="pt-br">
    <section class="footer-container">
        <div class="container footer">
            <div class="base">
                <img class="logoG" src="../assets/footer/logoGrandeG.svg" alt="Logo Global Grande">
                <div class="menuF">
                    <div class="mapa">
                        <h2>MAPA DO SITE</h2>
                        <a class="menu-button">HOME</a>
                        <a class="menu-button">SERVIÇOS</a>
                        <a class="menu-button">DEPOIMENTOS</a>
                        <a class="menu-button">QUEM SOMOS</a>
                        <a class="menu-button">NOSSOS CLIENTES</a>
                    </div>
                    
                    <div class="social">
                        <h2 class="redes">REDES SOCIAIS</h2>
                        <div class="foot">
                            <a href="https://twitter.com/kelcianol">
                                <img src="../assets/navbar/tt.svg" alt="">
                            </a>
        
                            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5584996726365">
                                <img src="../assets/navbar/wp.svg" alt="">
                            </a>
        
                            <a href="https://www.linkedin.com/company/global-content-br/">
                                <img src="../assets/navbar/lk.svg" alt="">
                            </a>
        
                            <a href="https://www.instagram.com/global_pen/">
                                <img src="../assets/navbar/inst.svg" alt="">
                            </a>
        
                            <a href="https://www.facebook.com/pages/Global%20Consultoria/387193244741164/">
                                <img src="../assets/navbar/face.svg" alt="">
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .footer-container{
        font-family: 'Inter',sans-serif;
        background-color: #FFFFFF;
    }

    .footer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 100px 0px 100px;
        gap: 150px;
    }

    .logoG{ 
        width: 500px;
        height: 330px;
    }

    .base{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 100px;
        gap: 150px;
    }

    .menuF{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 70px;
    }

    .mapa{
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 39px;
        padding-bottom: 10px;

        color: #002647;
    }

    .menu-button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 40px;

        text-decoration-line: underline;

        color: #002647;
    }

    .redes{
        padding-bottom: 40px;
    }

    .foot{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0px;
        gap: 20px;
    }

    @media(max-width:1400px){
        .logoG{ 
        width: 400px;
        height: 300px;
    }
    }
    
</style>