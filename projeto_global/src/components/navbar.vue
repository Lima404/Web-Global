<template lang="pt-br">
    <section class="navbar-container">
        <div class="container navbar">

            <div class="menu">

                <div class="nav1">
                    <img src="../assets/navbar/LogoG.svg" alt="Logo Global">

                    <router-link to="MyService">
                        <a class="menu-button">SERVIÇOS</a>
                    </router-link>
                    
                    <a class="menu-button">DEPOIMENTOS</a>
                    <a class="menu-button">CLIENTES</a>
                    <a class="menu-button">QUEM SOMOS</a>
                    <a class="menu-button">CONTATOS</a> 
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
export default {
    
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
        gap: 115.25px;
    }

    .nav1{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 0px;
        gap: 30px;
       
    }

    .menu-button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 24px;

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