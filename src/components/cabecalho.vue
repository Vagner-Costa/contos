
<template>
  <header class="w-full h-80 bg-preto flex linha justify-between px-20 py-5 
    items-end"
  >
    <div class="h-60 w-[150px] flex centralizado">
      <img class="w-60 h-60 absolute" src="../assets/icones/leitura.png" alt="">
      <p class="textos absolute text-20">Contos e historias</p>
    </div>

    <ul class="hidden lap:flex lap:linha">
      <BtnMenu titulo="Usuário"></BtnMenu>
      <BtnMenu titulo="Publicar"></BtnMenu>
      <BtnMenu titulo="Minhas Publicações"></BtnMenu>
      <BtnMenu titulo="Administrador"></BtnMenu>
      <BtnMenu titulo="Sair"></BtnMenu>
    </ul>

    <div class="lap:hidden">
      <button @click="store.actionsModalMenu"
        class="w-30 h-30 flex centralizado p-5 hover:p-3 "
      >
        <img src="../assets/icones/cardapio.png" alt="img">
      </button>
    </div>
  </header>
</template>

<script setup>
  import {useModalMenu} from '../stores/modalMenu.js'
  import BtnMenu from '../components/btnMenu.vue'

  const store = useModalMenu()
</script>
