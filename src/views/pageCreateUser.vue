<template>
    <main class="w-full min-h-screen flex centralizado bg-cover bg-no-repeat bg-center
        relative p-10  bg-[url('assets/bg_images/livro-mob.jpg')]
        tab:bg-[url('assets/bg_images/maquina-escrever.jpg')]
        desk:bg-[url('assets/bg_images/livro.jpg')]
        "
    >
        <div class="w-full h-full bg-preto/50 absolute left-0 top-0"></div>
        <div class="max-w-[400px] w-full h-screen max-h-[550px] rounded-10 bg-preto/80
            p-10 relative flex coluna justify-between
            tab:p-20"
        >
            <div class="w-full flex centralizado mb-20">
                <h1 class="text-cinza_c"
                    translate="no"
                >
                    Criar Usuário.
                </h1>
            </div>

            <div class="w-full flex coluna">
                <!-- Email -->
                <div class="w-full flex coluna mb-20">
                    <label class="text-cinza_c text-18 mb-5 ml-5">Email:</label>
                    <input class="p-10 border border-cinza_c bg-[rgba(0,0,0,0)] rounded-5 text-18 text-cinza_c 
                        placeholder:text-16 placeholder:text-cinza_m"
                        @input="validateEmail"
                        placeholder="Digite um email válido."
                        v-model="c_email"
                        type="email" 
                        ref="r_email"
                    >
                </div>

                <!-- Senha -->
                <div class="w-full flex coluna mb-20">
                    <label class="text-18 mb-5 ml-5"
                        :class="cptdValidateEmail ? 
                            ['text-cinza_c'] 
                                : 
                            ['text-cinza_e']"
                    >
                        Senha:
                    </label>
                    <input class="p-10 border bg-[rgba(0,0,0,0)] rounded-5 text-18 text-cinza_c placeholder:text-16 "
                        :class="cptdValidateEmail ? 
                            ['border-cinza_c','placeholder:text-cinza_m'] 
                                : 
                            ['border-cinza_e','placeholder:text-cinza_e']"
                        :disabled="cptdValidateEmail? false : true"
                        @input="validatePassword"
                        placeholder="Somente letras e números."
                        v-model="c_pass"
                        type="password" 
                        ref="r_pass"
                    >
                </div>

                <!-- Confirmar senha -->
                <div class="w-full flex coluna mb-40">
                    <label class="text-18 mb-5 ml-5"
                        :class="cptdValidatePass ? 
                            ['text-cinza_c'] 
                                : 
                            ['text-cinza_e']"
                    >
                        Confirmar senha:
                    </label>
                    <input class="p-10 border bg-[rgba(0,0,0,0)] rounded-5 text-18 text-cinza_c placeholder:text-16 "
                        :class="cptdValidatePass ? 
                            ['border-cinza_c','placeholder:text-cinza_m'] 
                                : 
                            ['border-cinza_e','placeholder:text-cinza_e']"
                        :disabled="cptdValidatePass? false : true"
                        @input="validateConfirmPassword"
                        placeholder="Confirmar senha."
                        v-model="c_confirmPass"
                        type="password" 
                        ref="r_confirmPass"
                    >
                </div>

                <!-- Botão enviar -->
                <div class="w-full flex coluna mb-20">
                    <button @click="createUser"
                        class="buttons_form" 
                        translate="no"
                    >
                        Cadastre-se
                    </button>
                </div>
            </div>

            <div class="w-full flex centralizado">
                <router-link class="text-center text-cinza_e underline underline-offset-4 
                    decoration-1 text-18 hover:text-cinza_m cursor-pointer" 
                    to="/pageLogin" translate="no"
                >
                    Já sou cadastrado.
                </router-link>
            </div>
            
        </div>
    </main>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useCreateUser } from '../stores/createUser/createUser.js'

    const c_email = ref('')
    const c_pass = ref('')
    const c_confirmPass = ref('')

    const r_email = ref()
    const r_pass = ref()
    const r_confirmPass = ref()

    const validate_email = ref(false)
    const validate_pass = ref(false)
    const validate_confirmPass = ref(false)

    const store = useCreateUser()

    function validateEmail(){
        const regexEmail = /([a-z0-9\.\_\-]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g
        regexEmail.test(c_email.value) ?   
            validate_email.value = true 
                : 
            validate_email.value = false
    }

    function validatePassword(){
        const regexLet = /[a-zA-Z]{1,}/gi
        const regexNum = /[0-9]{1,}/g

        regexLet.test(c_pass.value) && 
        regexNum.test(c_pass.value) && 
        (c_pass.value.length > 6) ?
            validate_pass.value = true
                :
            validate_pass.value = false
    }

    function validateConfirmPassword(){
        c_confirmPass.value === c_pass.value ? 
            validate_confirmPass.value = true 
                : 
            validate_confirmPass.value = false
    }

    function createUser(){
        if(!validate_email.value){
            r_email.value.focus()
            c_email.value = ""
            r_email.value.placeholder = "Campo email inválido"
            return
        }
        if(!validate_pass.value){
            r_pass.value.focus()
            c_pass.value = ""
            r_pass.value.placeholder = "Campo invalido! Letras e números."
            return
        }
        if(!validate_confirmPass.value){
            r_confirmPass.value.focus()
            c_confirmPass.value = ""
            r_confirmPass.value.placeholder = "Senha e confirmar senha são diferentes."
            return
        }

        store.actionsCreateUser({
            email:c_email.value,pass:c_pass.value,confirmPass:c_confirmPass.value
        })


    }

    const cptdValidateEmail = computed(()=>{
        return validate_email.value 
    })

    const cptdValidatePass = computed(()=>{
        return validate_pass.value 
    })

    const cptdValidateConfirmPass = computed(()=>{
        return validate_confirmPass.value 
    })

    


</script>

<style scoped>

</style>