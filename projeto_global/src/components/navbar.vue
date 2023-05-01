<template lang="pt-br">
    <section class="navbar-container">
        <div class="container navbar">

            <h2 id="nav"></h2> 

            <div class="menu">

                <div class="nav1">
                              
                    
                    <a href="#hero">
                        <img src="../assets/navbar/LogoG.svg" alt="Logo Global">
                    </a>

                    <a href="#service">
                        <h2 class="menu-button">SERVIÇOS</h2>
                    </a>
                    
                    <a href="#depoiment">
                        <h2 class="menu-button">DEPOIMENTOS</h2>
                    </a>
                    <a href="#about">
                        <h2 class="menu-button">QUEM SOMOS</h2>  
                    </a>
                    <a href="#cliente">
                        <h2 class="menu-button">CLIENTES</h2>
                    </a>

                </div>

                <div class="nav2">
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
    </section>
</template>
<script>
import MyHero from './views/MyHero.vue'
import MyService from './views/MyService.vue'
import MyDepoiment from './views/MyDepoiment.vue'
import MyAbout from './views/MyAbout.vue'
export default {
    components: { MyHero, MyService, MyDepoiment, MyAbout }
}
</script>
<style scoped>

    .navbar-container {
        padding: 15px 82px;
        background-color: #B4B3B3;
        font-family: 'Assistant', sans-serif;
    }
    
    .navbar{
        display: flex;
        justify-content: center;
    }

    .menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 7px 82px;
        gap: 200px;
    }

    .nav1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0px;
        gap: 50px;
    }

    a{
        text-decoration: none;
    }

    .menu-button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 24px;
        cursor: pointer;

        color: #002647;
    }

    .nav2{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0px;
        gap: 20px;
    }

    a[href^="#service"] {
        transition: all 0.5s ease-in-out;
    }

    a[href^="#service"]:hover {
        color: #ff0000;
        text-decoration: none;
        transform: scale(1.1);
    }

    a[href^="#depoiment"] {
        transition: all 0.5s ease-in-out;
    }

    a[href^="#depoiment"]:hover {
        color: #ff0000;
        text-decoration: none;
        transform: scale(1.1);
    }

    a[href^="#about"] {
        transition: all 0.5s ease-in-out;
    }

    a[href^="#about"]:hover {
        color: #ff0000;
        text-decoration: none;
        transform: scale(1.1);
    }

    a[href^="#cliente"] {
        transition: all 0.5s ease-in-out;
    }

    a[href^="#cliente"]:hover {
        color: #ff0000;
        text-decoration: none;
        transform: scale(1.1);
    }

    

    @media(max-width:1600px){

        .menu-button{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 0.800rem;
            line-height: 24px;

            color: #002647;
        }



    }

    @media(max-width:1430px){


}



</style>