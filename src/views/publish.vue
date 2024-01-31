<template>
    <main class="w-full min-h-screen bg-cinza_e">
        <Cabecalho></Cabecalho>
        <ModalMenu v-if="store.gettersModalMenu.setModal"></ModalMenu>

        <section class="w-full flex justify-center items-end px-20 py-30">
            <div class="w-full relative max-w-[600px] flex justify-between items-center">
                <div class="w-full absolute h-5 rounded-5 bg-preto z-0"></div>
                <div v-for="order,index in orderPublications" :key="index"
                    class="w-40 h-40 rounded-100% bg-preto textos text-branco flex centralizado z-10"
                >
                    {{ index + 1 }}
                </div>
            </div>
        </section>

        <section class="w-full min-h-[650px] relative px-5 flex centralizado py-30 linha lap:px-100 desk:px-200">
            
            <div class="w-40 min-w-40 flex justify-center absolute z-50 left-5 
                tab:left-100 lap:left-[250px] desk:left-[400px]"
            >
                <button @click="manage.actionsManageOrder('+')"
                    class="text-branco bg-preto w-40 h-40 text-18 rounded-100% 
                    font-bold hover:bg-cinza_c"
                >
                    &#60;&#60;
                </button>
            </div>
            
            <div class="w-[350px] min-w-[350px] h-[600px] min-h-[600px] flex linha 
                items-center justify-start"
            >
                <template v-for="(publication, index) in orderPublications" >
                    <addGenre v-if="index === 0" :key="index" :titulo="publication"
                        v-model:genero="genero_conto"
                    ></addGenre>
                    <addFiles v-if="index === 1" :key="index" :titulo="publication"
                       
                    ></addFiles>
                    <addCover v-if="index === 2" :key="index" :titulo="publication"
                        @emit-add-file="add_file"
                    ></addCover>
                    <addTitle v-if="index === 3" :key="index" :titulo="publication"
                        v-model:texto="titulo_conto"
                    ></addTitle>
                    <addAuthor v-if="index === 4" :key="index" :titulo="publication"
                        v-model:author="author_conto"
                    ></addAuthor>
                </template>   
            </div>

            <div class="w-40 min-w-40 flex justify-center absolute z-50 right-5 tab:right-100 lap:right-[250px] desk:right-[400px]"
            >
                <button @click="manage.actionsManageOrder('-')"
                    class="text-branco bg-preto w-40 h-40 text-18 rounded-100% 
                    font-bold hover:bg-cinza_c"
                >
                    &#62;&#62;
                </button>
            </div>
        </section>
    </main>
</template>

<script setup>
    import Cabecalho from '../components/cabecalho.vue'
    import ModalMenu from '../components/modalMenu.vue'
    import router from '../routes/index.js'
    import addGenre from '../components/publish/addGenre.vue'
    import addCover from '../components/publish/addCover.vue'
    import addTitle from '../components/publish/addTitle.vue'
    import addAuthor from '../components/publish/addAuthor.vue'
    import addFiles from '../components/publish/addFiles.vue'
    import { orderPublications } from '../services/orderPublications.js'
    import { useManageOrder } from '../stores/manageOrder.js'
    import { useModalMenu } from '../stores/modalMenu.js'
    import {useUserData} from '../stores/userData.js'
    import { ref,computed, watch } from 'vue'

    const store = useModalMenu()
    const manage= useManageOrder()
    const userData = useUserData()

    const genero_conto = ref('')
    const capa_conto = ref('')
    const titulo_conto = ref('')
    const author_conto = ref('')
    const text_tale = ref('')
    
    if(!sessionStorage.getItem('token')){
        router.push('/pageLogin')
    }else{
        userData.actionsUserData({token:sessionStorage.getItem('token')})
    }

    watch(()=>userData.gettersUserData,(newValue)=>{
        author_conto.value = newValue.name
    },{deep:true})

    function add_file(payload){
        capa_conto.value = payload.file
    }

    const cptdGenero = computed(()=>{
        return genero_conto.value
    })
    const cptdTitulo = computed(()=>{
        return titulo_conto.value
    })
    const cptdCapa = computed(()=>{
        return capa_conto.value
    })
    const cptdAuthor = computed(()=>{
        return author_conto.value
    })
    const cptdTestTale = computed(()=>{
        return text_tale.value
    })
</script>

<style scoped>
</style>