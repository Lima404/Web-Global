<template lang="pt-br">
    <section class="MyCard-container">
        <div class="container MyCard">
            <div class="content">
                <div class="up">
                    <div class="box">
                        <div class="text">
                            <img src="../../assets/dep/Vector.svg" class="vetor" alt="">
                            <div class="dep">
                                <div>
                                    <p class="lib">{{ coment }}</p>
                                </div>
                                <div>
                                    <p class="name-person">{{ name }}</p>
                                    <p class="name-person">{{ office }} / {{ city }}</p>
                                </div>
                            </div>
                        </div>
                        <div id="pic">
                            <img class="foto" :src="caminhoImage" alt="Minha Imagem">
                        </div>
                    </div>
                    <div class="vec">
                        <button @click="next">Proximo<img class="arrow" src="/assets/dep/seta.svg" alt="Seta apontando para a direita"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            index: this.i
        }
    },
    methods:{
        next(){
            this.index = (this.index + 1) %this.length,
            this.$emit('next', this.index)
        }
    },
    props:{
        length:{
            type: Number,
            required: true,
        },
        i:{
            type: Number,
            required: true,
            default: 0,
        },
        name:{
            type: String
        },
        office:{
            type: String
        }, 
        city:{
            type: String
        },
        coment:{
            type: String
        },
        caminhoImage:{
            type: String
        }
    }
    
}
</script>
<style scoped>




.box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 10px 40px;
}

.up{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 50px;
    background: #FFFFFF;
    border-radius: 50px;
}

.navbut{
    padding-bottom: 40px;
}

.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 90px;
    gap: 40px;
}

.text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 20px;
}

.dep{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
}

.pic{
    padding: 40px 0px;
}

.lib{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    text-align: justify;

    color: #000000;

    width: 415px;
}

.name-person{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 0.8rem;
    line-height: 19px;
    text-align: right;

    width: 415px;
}

button{
    gap: 10px;
}


.vec{
        display: flex;
        align-items: center;
}

.vec:hover{
    filter: invert(48%) sepia(63%) saturate(445%) hue-rotate(152deg) brightness(109%) contrast(91%);
    color: #41A8D3;
    transition: all 200ms ease;
}

.vec button{
    display: flex;
    background: transparent;
    border: none;
    color: #023F5C;
    font-family: "Inter",sans-serif;
    font-size: 1rem;
    font-weight: 600;
    position: relative;
    transition: all 400ms ease;
    cursor: pointer;
}


a{
    text-decoration: none;
    color: #000000;
}

@media(max-width:1240px){
    
    .lib{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 24px;
    text-align: justify;

    color: #000000;
    }

    .up{
        gap: 15px;
    }

    .box{
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 10px;
    }


    .foto{
        width: 406px;
        height: 344px;
    }

    .vetor{
        width: 30px;
        height: 30px;
    }

    .dep{
        gap: 20px;
    }

    .vec{
        font-size: 0.8rem;
        padding: 0;
    }


}

 @media(max-width:1030px){

    .foto{
        width: 386px;
        height: 324px;
    }

    .lib{
        line-height: 20px;
    }

    .text{
        padding: 20px;
    }

 }

 @media(max-width:575px){

    .up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background: #FFFFFF;
        border-radius: 50px;
    }
    
    .text{
        padding: 0px;
        margin: 10px;
        width: 324px;
    }

    .lib{
        width: 324px;
    }

    .name-person{
        width: 324px;
    }

}

    @media(max-width:390px){
        
        .up{
            width: 326px;
        }

        .foto{
            width: 346px;
            height: 284px;
        }

        .content{
            padding: 60px 0px;
        }
    }



</style>