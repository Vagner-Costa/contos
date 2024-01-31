<template>
    <!-- Componente selecionar genero do conto -->
    <div class="w-full min-w-full min-h-full flex coluna centralizado py-30 transition-all ease-linear"
        :style="{'marginLeft':`${manage_order.gettersManageOrder}px`}"
    >
            <h3 class="semi_titulos mb-20">{{ props.titulo }}</h3>
            <select v-model="genero"
                class="w-full max-w-[300px] p-15 rounded-5 textos bg-cinza_c 
                border border-preto cursor-pointer text-cinza_m"
            >
                <option class="textos text-cinza_e bg-cinza_c" disabled value=""> - Selecione - </option>
                <option class="textos text-cinza_e bg-cinza_c"
                    v-for="genre,index in genres" :key="index" :value="genre"
                >
                    {{ genre }}
                </option>
            </select>
    </div>
</template>

<script setup>
    import {genres} from '../../services/genres.js'
    import {useManageOrder} from '../../stores/manageOrder.js'

    const manage_order = useManageOrder()
    const props = defineProps(['titulo'])

    const genero = defineModel('genero')
</script>