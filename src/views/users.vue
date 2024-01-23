<template>
    <main class="w-full min-h-screen ">
        <Cabecalho></Cabecalho>
        <ModalMenu v-if="modal.gettersModalMenu.setModal"></ModalMenu> 

        <section class="w-full flex coluna px-10 lap:linha lap:px-100 lap:">
            <div class="w-full flex coluna centralizado py-30 lap:w-[300px] 
                lap:min-w-[300px] lap:max-w-[300px] lap:justify-start "
            >
                <div class="w-[120px] min-w-[120px] h-[120px] min-h-[120px] flex 
                    centralizado overflow-hidden rounded-100% border border-cinza_c
                    p-5 relative mb-10 z-0"
                >
                    <img src="../assets//icones/perfil.png" alt="img">

                    <button class="w-30 h-30 bg-branco font-semibold text-cinza_c
                        absolute rounded-100% leading-[20px] text-24 top-[75px] left-[75px]"
                    >
                        +
                    </button>
                </div>

                <p class="textos text-cinza_e">{{ userData.gettersUserData.nome }}</p>
                <p class="ttextos text-cinza_e">{{ userData.gettersUserData.email }}</p>
            </div>

            <div class="w-full flex coluna">
                <h1 class="w-full text-35 font-bold text-cinza_m">
                    Minhas Publicações
                </h1>
            </div>
        </section>
        
    </main>
</template>

<script setup>
    import Cabecalho from '../components/cabecalho.vue'
    import ModalMenu from '../components/modalMenu.vue'
    import router from '../routes/index'

    import { useModalMenu } from '../stores/modalMenu.js'

    import {useUserData} from '../stores/userData.js'

    const modal = useModalMenu()
    const userData = useUserData()

    if(!sessionStorage.getItem('token')){
        router.push('/pageLogin')
    }else{
        userData.actionsUserData({token:sessionStorage.getItem('token')})
    }
</script>