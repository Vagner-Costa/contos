<template>
    <!-- Componente Adicionar título ao conto -->
    <div class="w-full min-w-full min-h-full flex coluna centralizado py-30">
        <h3 class="semi_titulos mb-20">{{ props.titulo }}</h3>
        <div class="w-full max-w-[300px] ">
            <input v-model="texto"
                class="w-full p-15 placeholder:text-cinza_m border border-preto
                    rounded-5 textos text-cinza_e"
                type="text"
                placeholder="Adicione um título para seu conto..."
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['titulo'])
    const texto = defineModel('texto')
</script>