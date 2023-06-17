<template>
    <body class="bg-roxo-claro flex justify-center items-center h-screen">
        <main class="flex px-6 drop-shadow-2xl">
            <section class=" bg-roxo-escuro rounded-l-2xl hidden md:flex">

                <img v-show="validEmail && validSenha" class="w-full" src="../assets/cadastro.svg" />
                <img v-show="!validEmail | !validSenha" class="w-full " src="../assets/s_danger.svg" />

            </section>

            <section class="bg-white p-10 rounded-r-2xl gap-6 flex flex-col justify-center items-center">
                <div class=" ">
                    <img class="w-full" src="../assets/cadastro-name.svg" />
                </div>

                <div class="text-center hidden">
                    <p class="text-xs mb-2">O Login é um formulário moderno
                        e interativo, desenvolvido com a poderosa
                        combinação do Vue.js e do elegante framework
                        CSS Tailwind CSS. Além disso,
                        a integração do Vue.js permite uma interatividade suave
                        e eficiente, tornando a experiência de login rápida e fácil.
                        Este formulário é uma demonstração do meu conhecimento em
                        tecnologias de ponta e do meu talento em design de interfaces de usuário.
                        Aproveite e faça login com
                        estilo! </p>
                </div>

                <form>
                    <label class="text-sm  text-slate-500 font-bold mb-2" for="name">Nome</label>
                    <input
                        class="text-sm w-full mb-4  pl-3 py-2 rounded-full border focus:outline-none hover:border-roxo-escuro focus:border-roxo-escuro "
                        id="name" type="name" placeholder="Como você quer ser chamado?"
                        />

                        <label class="text-sm  text-slate-500 font-bold mb-2" for="email">Email</label>
                    <input
                        class="text-sm w-full mb-4  pl-3 py-2 rounded-full border focus:outline-none hover:border-roxo-escuro focus:border-roxo-escuro "
                        id="email" type="email" placeholder="Digite seu endereço de e-mail" v-model="email"
                        @input="validateEmail" />

                    <!-- <label v-show="!validEmail" class="text-xs text-red-500">Por favor, digite um email válido.</label>
                    <label v-show="!validSenha" class="text-xs text-red-500 mb-2">Por favor, digite uma senha
                        válida.</label> -->
                    
                    <label class="text-sm  shadow text-slate-500 font-bold mb-2  w-full" for="senha">Senha</label>

                    <input
                        class="text-sm mb-4 w-full pl-3 py-2 rounded-full border focus:outline-none hover:border-roxo-escuro focus:border-roxo-escuro"
                        id="senha" type="password" placeholder="Digite sua senha" v-model="password"
                        @input="validateSenha" />

                    <button
                        class="font-bold shadow-2xl hover:bg-roxo-hover text-white rounded-full bg-roxo-escuro w-full py-2"
                        type="button">Entrar</button>
                </form>

                <section class="flex">
                    <p class="text-sm whitespace-normal">Já posui conta? </p>
                    <button
                        class="font-bold shadow-2xl hover:bg-roxo-hover text-white rounded-full bg-roxo-hover w-full py-2"
                        type="button"><router-link to="/">Login </router-link></button>
                </section>
            </section>
        </main>
    </body>
</template>

<script >


export default {
    data() {
        return {
            email: '',
            password: '',
            validEmail: true,
            validSenha: true
        }
    },
    methods: {

        validateEmail() {
            // Lógica de validação do email (pode ser um regex ou outra validação personalizada)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.validEmail = emailRegex.test(this.email);

        },
        validateSenha() {
            // Lógica de validação do email (pode ser um regex ou outra validação personalizada)
            this.validSenha = this.password.length >= 8;

        },
    }
}
</script>
