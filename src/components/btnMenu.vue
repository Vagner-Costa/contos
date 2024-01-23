<template>
    <li class="px-10">
        <router-link :to="props.titulo === 'Usuário'?
            '/users'
                :
            props.titulo === 'Publicar' ? 
            '/publish'
                :
            props.titulo === 'Minhas Publicações' ?
            '/myPublications'
                :
            props.titulo === 'Administrador' ?
            '/administrator'
                :
            '/'
            
            " 
            class="textos text-cinza_m"
        >
            {{ props.titulo }}
        </router-link>
    </li>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['titulo'])


</script>