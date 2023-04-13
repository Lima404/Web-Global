<template lang="pt-br">
    <section class="MyCard-container">
        <div class="container MyCard">
            <div class="content">
                <div class="up">
                    <div class="text">
                        <img src="../../assets/dep/Vector.svg" alt="">
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
                        <img :src="caminhoImage" alt="Minha Imagem">
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
            // verifica se tem novos depoimentos a serem exibidos
            if (this.index === this.length) {
                this.index = 0;
                this.$emit('next', this.index)
            }else{
                this.index++
                this.$emit('next', this.index)
            }
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
            default: 0
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
            type: String,
        }
    }
    
}
</script>
<style scoped>


.MyCard-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 200px;

    background: #002647;
}


.box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 97px;
    padding: 100px;
}

.up{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 50px;
    background: #FFFFFF;
    gap: 97px;
    border-radius: 50px;
}

.navbut{
    padding-bottom: 40px;
}

.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 100px;
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


.vec{
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    cursor: pointer;
    transition: 0.5s;

    color: #000000;
}

.vec:hover{
    padding: 0px 10px;
    background-color: #e6c776;
    color: #FFFFFF;
    border-radius: 20px;
}

a{
    text-decoration: none;
    color: #000000;
}

</style>