<template>
    <div @click="store.actionsModalMenu"
        class="w-full h-full fixed left-0 top-80 bg-preto/70 lap:hidden z-50"
    >
        <header @click.stop=""
            class="w-[200px] h-full bg-preto absolute top-0 transition-all 
            easy-in-out py-20 px-5"
            :class="store.gettersModalMenu.setHeader ? 'ml-0' : 'ml-[-250px]'"
        >
            <ul class="w-full flex coluna">
                <BtnMenu titulo="Usuário"></BtnMenu>
                <BtnMenu titulo="Publicar"></BtnMenu>
                <BtnMenu titulo="Minhas Publicações"></BtnMenu>
                <BtnMenu titulo="Administrador"></BtnMenu>
                <BtnMenu titulo="Sair"></BtnMenu>
            </ul>
        </header>
    </div>
</template>

<script setup>
    import { useModalMenu } from '../stores/modalMenu'
    import BtnMenu from '../components/btnMenu.vue'

    const store = useModalMenu()

    
</script>