<template>
    <!-- Componente adicionar capa ao conto -->
    <div class="w-full min-w-full min-h-full flex coluna centralizado py-30">
        <h3 class="semi_titulos mb-20">{{ props.titulo }}</h3>
        <p v-show="{}"
            class="textos text-vermelho text-center "
        >
            {{ cptdMsgTales }}
        </p>

        <!-- <div class="w-full max-w-[350px] h-[490px] relative p-10 grid 
            gap-[10px] grid-cols-2 justify-evenly bg-gradient-to-b from-cinza_m to-cinza_c"
        >

            <div v-for="file,index in cptdFileTales" :key="index" 
                class="w-[160px] min-w-[160px] h-[230px] min-h-[230px] flex 
                centralizado relative"
            >
                <button @click="removePageTale(index)"
                    class="w-20 h-20 top-5 right-5 bg-vermelho absolute z-10 
                        rounded-100% flex centralizado cursor-pointer"
                >
                    <p class="textos text-branco">x</p>
                </button>

                <div class="w-[160px] min-w-[160px] h-[230px] min-h-[230px] flex 
                    centralizado absolute z-0 overflow-hidden"
                >
                    <object :data="file.file" type="application/pdf" 
                        class="snap-none overflow-y-hidden absolute z-0"
                        height="230"
                    ></object>
                </div>

                <p class="absolute bg-branco px-10 py-5 z-10">Página {{ index + 1 }}</p>
            </div>

            <label class="w-40 h-40  bg-preto/70 flex centralizado 
                rounded-100% z-10 absolute btn_centralizado" 
                for="contos"
            >
                <span class="text-[20px] font-bold text-branco">+</span>
            </label>
            <input @input="addTales($event)" type="file" id="contos" 
                accept="application/pdf"
                class="hidden"
            >
        </div> -->
    </div>
</template>

<script setup>
    import { ref,computed } from 'vue'
    // const props = defineProps(['titulo'])

    // const file_tales = ref([])
    // const msg_tales = ref('')

    // async function addTales(evt){
    //     let tales = evt.target.files[0]
    //     if(file_tales.value.length <= 0){
    //         file_tales.value.push({name:tales.name,file:URL.createObjectURL(tales)})
    //     }else{
    //         if(file_tales.value.length >= 4){
    //             msg_tales.value = "Máximo permitido de 4 arquivos!"
    //             setTimeout(()=>{
    //                 msg_tales.value=""
    //             },4000)
    //         }else{   
    //             const response = file_tales.value.find(e =>{
    //                 if(e.name === tales.name){
    //                     return e
    //                 }
    //             })

    //             if(response != undefined){
    //                 msg_tales.value = "Arquivo já foi adicionado!"
    //                 setTimeout(()=>{
    //                     msg_tales.value=""
    //                 },4000)
    //             }else{
    //                 file_tales.value.push({name:tales.name,file:URL.createObjectURL(tales)})
    //             }
    //         }
    //     }
    //     tales = []
    // }

    // async function removePageTale(ind){
        
    // }

    // const cptdFileTales = computed(()=>{
    //     return file_tales.value
    // })
    // const cptdMsgTales = computed(()=>{
    //     return msg_tales.value
    // })
</script>

<style scoped>
    .btn_centralizado{
        left: calc(50% - 15px);
        top: calc(50% - 15px);
    }
</style>