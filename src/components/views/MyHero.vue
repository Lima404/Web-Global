<template lang="pt-br">
    <section class="hero-container">
        <div id="container hero">
            <div class="base">
                <div class="img">
                    <div id="home">
                        <img class="logoG" src="../../assets/footer/logoGrandeG.svg" alt="Logo grande Global">
                    </div>
                    <div class="foto">
                        <img class="foto3" src="../../assets/hero/foto3.svg" alt="Foto dos socios">
                    </div>
                    <h5 id="service"></h5>
                </div>
                <div class="nichos">
                    <h3>SERVIÇOS</h3>
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

    .hero-container{
        font-family: 'inter', sans-serif;
        background-color: #FFFFFF;
    }

    .img{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 0px;
        gap: 20px;
    }

    .base{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .logoG{
        width: 500px;
        height: 327px;
        padding: 0px;
    }

    .foto3{
        width: 800px;
        height: 528px;
        padding-bottom: 0px;
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

    @media(max-width:1400px){
        
        .foto3{
            width: 650px;
            height: 450px;
        }

        .logoG{
            width: 450px;
            height: 250px;
        }

        .hero{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0px;
         }

    }

    @media(max-width:1069px){
        .img{
            gap: 0;
        }
    }

    @media(max-width:1000px){
        
        .foto{
            display: none;
        }

        .logoG{
            padding: 50px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width:414px){
        .logoG{
            width: 390px;
        }
    }
</style>