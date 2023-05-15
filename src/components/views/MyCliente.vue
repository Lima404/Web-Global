<template lang="pt-br">
    <section class="cliente-container">
        <div class="container cliente">
            <div class="box">
                <div class="image">
                    <div class="col">
                        <img src="../../../public/assets/cliente/4am.svg" alt="">
                        <img src="../../../public/assets/cliente/acari.svg" alt="">
                        <img src="../../../public/assets/cliente/adega.svg" alt="">
                        <img src="../../../public/assets/cliente/alexandres.svg" alt="">
                        <img src="../../../public/assets/cliente/casabela.svg" alt="">
                        <img src="../../../public/assets/cliente/clodonil.svg" alt="">
                        <img src="../../../public/assets/cliente/cmed.svg" alt="">
                        <img src="../../../public/assets/cliente/crefacil.svg" alt="">
                        <img src="../../../public/assets/cliente/cristal.svg" alt="">
                        <img src="../../../public/assets/cliente/draj.svg" alt="">
                        <img src="../../../public/assets/cliente/etef.svg" alt="">
                        <img src="../../../public/assets/cliente/farma+.svg" alt="">
                        <img src="../../../public/assets/cliente/gtnet.svg" alt="">
                        <img src="../../../public/assets/cliente/janny.svg" alt="">
                        <img src="../../../public/assets/cliente/jmtintas.svg" alt="">
                        <img src="../../../public/assets/cliente/kittanda.svg" alt="">
                        <img src="../../../public/assets/cliente/labex.svg" alt="">
                        <img src="../../../public/assets/cliente/lopes.svg" alt="">
                        <img src="../../../public/assets/cliente/marques.svg" alt="">
                        <img src="../../../public/assets/cliente/mdhouse.svg" alt="">
                        <img src="../../../public/assets/cliente/medvida.svg" alt="">
                        <img src="../../../public/assets/cliente/newcaixas.svg" alt="">
                        <img src="../../../public/assets/cliente/nino.svg" alt="">
                        <img src="../../../public/assets/cliente/paguepouco.svg" alt="">
                        <img src="../../../public/assets/cliente/papatos.svg" alt="">
                        <img src="../../../public/assets/cliente/passofino.svg" alt="">
                        <img src="../../../public/assets/cliente/pontodevista.svg" alt="">
                        <img src="../../../public/assets/cliente/reabilitar.svg" alt="">
                        <img src="../../../public/assets/cliente/renal.svg" alt="">
                        <img src="../../../public/assets/cliente/santaluzia.svg" alt="">
                        <img src="../../../public/assets/cliente/servebem.svg" alt="">
                        <img src="../../../public/assets/cliente/sj.svg" alt="">
                        <img src="../../../public/assets/cliente/sobreisso.svg" alt="">
                        <img src="../../../public/assets/cliente/teonia.svg" alt="">
                        <img src="../../../public/assets/cliente/vidamais.svg" alt="">
                        <img src="../../../public/assets/cliente/vitoria.svg" alt="">
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

    .cliente{
        display: flex;
        background-color: #002647;
    }

    .box{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 61px 100px;
    }

    .image{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col{
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        padding: 72px;
        background-color: white;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 100px;
        height: 100px;
    }

    @media(max-width:414px){

        .cliente{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .box{
            padding: 40px 0px;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .col{
            padding: 10px;
            width: 300px;
        }

    }
    
</style>