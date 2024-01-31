<template>
    <main class="w-full min-h-screen">
        <Cabecalho></Cabecalho>
        <ModalMenu v-if="store.gettersModalMenu.setModal"></ModalMenu>
        <section class="w-full min-h-screen px-10 flex linha border ">

        </section>
    </main>
</template>

<script setup>
    import Cabecalho from '../components/cabecalho.vue'
    import ModalMenu from '../components/modalMenu.vue'

    import { useModalMenu } from '../stores/modalMenu.js'

    const store = useModalMenu()
</script>