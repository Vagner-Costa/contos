<template>
    <!-- Componente Adicionar Autor -->
    <div class="w-full min-w-full min-h-full flex coluna centralizado py-30">
        <h3 class="semi_titulos mb-20">{{ props.titulo }}</h3>
        <div class="w-full max-w-[300px] ">
            <input v-model="author"
                class="w-full p-15 text-cinza_e border border-cinza_m rounded-5 
                textos placeholder:text-cinza_m"
                type="text"
                placeholder="Adicionar author."
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['titulo'])
    const author = defineModel('author')
</script>