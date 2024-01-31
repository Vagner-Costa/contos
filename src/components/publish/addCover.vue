<template>
    <!-- Componente adicionar capa ao conto -->
    <div class="w-full min-w-full min-h-full flex coluna centralizado py-30">
        <h3 class="semi_titulos mb-20">{{ props.titulo }}</h3>
        <p v-show="cptdErrorMsg"
            class="textos text-vermelho text-center "
        >
            {{ cptdErrorMsg }}
        </p>
        <div class="w-full max-w-[350px] h-[490px] bg-cinza_e  flex centralizado 
            relative rounded-5 bg-gradient-to-b from-cinza_m to-cinza_c"
        >
            <img v-if="cptdPhotoCover"
                class="object-cover absolute z-0" 
                :src="cptdPhotoCover" 
                alt="img"
            >
            <label class="w-30 h-30  bg-cinza_m/50 flex centralizado 
                rounded-100% z-10 absolute" 
                for="capa"
            >
                <span class="text-[20px] font-bold text-branco">+</span>
            </label>
            <input @input="addFile($event)" type="file" id="capa" class="hidden"
                accept=".png, .jpg, .jpeg"
            >
        </div>
    </div>
</template>

<script setup>

    import {ref, computed } from 'vue'

    const photo_cover = ref(null)
    const error_msg = ref('')

    const props = defineProps(['titulo','capa'])
    const emit = defineEmits(['emitAddFile'])

    //Lendo Arquivo
    async function addFile(evt){
        const file = await evt.target.files[0]
        if(!file.name.endsWith('.jpeg') & !file.name.endsWith('.jpg') & !file.name.endsWith('.png')){
            error_msg.value = 'Arquivo não suportado, somente arquivos .jpg, .jpeg ou .png'
            setTimeout(()=>{
                error_msg.value=''
            },4000)
            return
        }

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onloadend = ()=>{
            photo_cover.value = fileReader.result
        }
            
        emit('emitAddFile',{file : file}) 
    }

    const cptdPhotoCover = computed(()=>{
        return photo_cover.value
    })

    const cptdErrorMsg = computed(()=>{
        return error_msg.value
    })
</script>

<style scoped>
</style>