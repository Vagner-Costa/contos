<template>
    <main class="w-full min-h-screen flex centralizado bg-cover bg-no-repeat bg-center
        relative p-10  bg-[url('assets/bg_images/livro-mob.jpg')]
        tab:bg-[url('assets/bg_images/maquina-escrever.jpg')]
        desk:bg-[url('assets/bg_images/livro.jpg')]
        "
    >
        <div class="w-full h-full bg-preto/50 absolute left-0 top-0"></div>
        <div class="max-w-[400px] w-full h-screen max-h-[450px] rounded-10 bg-preto/80
            p-10 relative flex coluna justify-between
            tab:p-20"
        >
            <div class="w-full flex centralizado coluna mb-20">
                <h1 class="text-cinza_c"
                    translate="no"
                >
                    Efetue o login.
                </h1>

                <div class="w-full h-[45px] overflow-hidden flex centralizado">
                    <p v-if="store.gettersLogin.msg"
                        class="w-full text-center text-16 leading-[20px] overflow-hidden
                        text-vermelho"
                    >
                        {{ store.gettersLogin.msg }}
                    </p>
                </div>
            </div>

            <div class="w-full flex coluna">
                <div class="w-full flex coluna mb-20">
                    <label class="text-cinza_c text-18 mb-5 ml-5">Email:</label>
                    <input class="inputs_form"
                        v-model="l_email"
                        placeholder="Digite o email..."
                        type="email"
                        ref="r_email"
                    >
                </div>
                <div class="w-full flex coluna mb-40">
                    <label class="text-cinza_c text-18 mb-5 ml-5">Senha:</label>
                    <input class="inputs_form"
                        v-model="l_pass"
                        placeholder="Digite a senha..."
                        type="password" 
                        ref="r_pass"
                    >
                </div>
                <div class="w-full flex coluna mb-20">
                    <button @click="login"
                        class="buttons_form"
                        translate="no"
                    >
                        Login
                    </button>
                </div>
            </div>

            <div class="w-full flex centralizado">
                <router-link 
                    class="text-center text-cinza_e underline underline-offset-4 
                    decoration-1 text-18 hover:text-cinza_m" 
                    to="/createUser"
                >
                    Ainda não sou cadastrado.
                </router-link>
            </div>
            
        </div>
    </main>
</template>

<script setup>
    import { useLogin } from '../stores/login.js'
    import {ref} from 'vue'

    sessionStorage.removeItem('token')

    const store = useLogin()

    const l_email = ref()
    const l_pass = ref()

    const r_email = ref()
    const r_pass = ref()

    async function login(){
        if(!l_email.value){
            r_email.value.focus()
            r_email.value.placeholder = 'Campo email é obrigatório.'
            l_email.value=''
            return
        }
        if(!l_pass.value){
            r_pass.value.focus()
            r_pass.value.placeholder = 'Campo senha é obrigatório.'
            l_pass.value=''
            return
        }

        store.actionsLogin({email:l_email.value, pass:l_pass.value})
    }

</script>