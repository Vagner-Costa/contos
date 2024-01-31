<template>
    <main class="w-full min-h-screen bg-cinza_e">
        <Cabecalho></Cabecalho>
        <ModalMenu v-if="modal.gettersModalMenu.setModal"></ModalMenu> 

        <section class="w-full flex coluna px-10 lap:linha lap:px-50 desk:px-[200px]">
            <div class="w-full flex coluna centralizado py-30 lap:w-[300px] 
                lap:min-w-[300px] lap:max-w-[300px] lap:justify-start "
            >

                <div class="w-[140px] min-w-[140px] h-[140px] min-h-[140px] flex 
                    centralizado overflow-hidden rounded-100% p-2 relative mb-20 z-0
                    bg-gradient-to-b from-cinza_m to-cinza_c "
                >
                
                    <img v-if="downloadPhotoProfile.gettersDownloadPhotoProfile" 
                        class="w-full h-full object-cover rounded-100%"
                        :src="cptdPhotoProfile? 
                            cptdPhotoProfile
                                :
                            downloadPhotoProfile.gettersDownloadPhotoProfile" 
                        alt="foto" 
                    />

                    <img v-else 
                        class="w-full h-full object-cover rounded-100%"
                        :src="cptdPhotoProfile? 
                            cptdPhotoProfile 
                                : 
                            'icones/perfil.png'" 
                        alt="img"
                    >

                    <label for="profilePhoto"
                        class="w-30 h-30 bg-preto/30 z-10 absolute rounded-100% cursor-pointer 
                        top-[90px] left-[98px] flex centralizado font-semibold"
                    >
                        <span class="textos text-branco">+</span>
                    </label>
                    <input @input="photoProfile($event)"
                        type="file" 
                        id="profilePhoto" 
                        class="hidden" 
                        accept=".png, .jpg, .jpeg"
                    >
                </div>

                <p v-if="userData.gettersUserData"  
                    class="textos mb-5"
                >
                    {{ userData.gettersUserData.name }}
                </p>
                <p v-if="userData.gettersUserData" 
                    class="textos"
                >
                    {{ userData.gettersUserData.email }}
                </p>

                <button class="mt-30 flex linha centralizado cursor-pointer py-2 ">
                    <img class="w-30 mr-5" src="../assets/icones/lapis.png" alt="img">
                    <p class="textos">Editar Perfil</p>
                </button>
                
            </div>

            <div class="w-full flex coluna items-center pt-30">
                <h1 class="titulos">
                    Minhas Publicações
                </h1>
            </div>
        </section>
        
    </main>
</template>

<script setup>
    import Cabecalho from '../components/cabecalho.vue'
    import ModalMenu from '../components/modalMenu.vue'
    import router from '../routes/index.js'
    import { useModalMenu } from '../stores/modalMenu.js'
    import { useUploadPhotoProfile } from '../stores/uploadPhotoProfile.js'
    import { useUserData } from '../stores/userData.js'
    import { useDownloadPhotoProfile } from '../stores/downloadPhotoProfile.js'
    import { ref, computed, watch } from 'vue'

    const modal = useModalMenu()
    const userData = useUserData()
    const storePhotoProfile = useUploadPhotoProfile()
    const  downloadPhotoProfile = useDownloadPhotoProfile()

    const preview_photo_profile = ref('')
    const msg_photo_profile = ref('')

    if(!sessionStorage.getItem('token')){
        router.push('/pageLogin')
    }else{
        userData.actionsUserData({token:sessionStorage.getItem('token')})
    }

    watch(()=>{userData.gettersUserData},(newValue,oldvalue)=>{
        if (userData.gettersUserData.foto || userData.gettersUserData.foto !== ''){
            downloadPhotoProfile.actionsDownloadPhotoProfile({id_photo : userData.gettersUserData.foto})
        }
    },{deep:true})


    function photoProfile(evt){
        const file_photo = evt.target.files[0]

        if(!file_photo.name.endsWith('.jpeg') && 
            !file_photo.name.endsWith('.jpg') &&
            !file_photo.name.endsWith('.png')
        ){
            alert('Arquivo não suportado!')
            return 
        }

        const fileReder = new FileReader()
        fileReder.readAsDataURL(file_photo)
        fileReder.onloadend = ()=>{
            preview_photo_profile.value = fileReder.result
        }

        storePhotoProfile.actionsUploadPhotoProfile({photo_profile : file_photo})
    }

    const cptdPhotoProfile = computed(()=>{
        return preview_photo_profile.value
    })
</script>