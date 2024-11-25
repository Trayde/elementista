<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Username:</label>
                <input type="text" v-model="username" id="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const username = ref('');
        const password = ref('');
        const errorMessage = ref('');

        const redirectAfterLogin = computed(() => store.state.auth.redirectAfterLogin || '/');
        const arquivoIno = computed(() => store.state.arquivo.arquivo || '');

        const handleLogin = async () => {
            try {
                await store.dispatch('auth/login', { username: username.value, password: password.value });
                router.push(redirectAfterLogin.value); // Redireciona para a rota após login


                console.log("arquivo login", arquivoIno.value);


                router.push({
                    path: "/ver-tutoriais",
                    query: { nome: arquivoIno.value }
                });

            } catch (error) {
                errorMessage.value = 'Login falhou. Verifique suas credenciais.';
            }
        };

        return {
            username,
            password,
            errorMessage,
            handleLogin
        };
    }
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.error {
    color: red;
    margin-top: 1rem;
}
</style>