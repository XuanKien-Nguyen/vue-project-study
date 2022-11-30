<template>
    <div class="login-form">
      <div class="username-input">
        <label>Username: </label>
        <input name="username" placeholder="Enter username" type="text" v-model="username"/>
      </div>
      <div class="password-input">
        <label>Password: </label>
        <input name="password" placeholder="Enter password" type="password" v-model="password"/>
      </div>
      <button class="submit-button" @click="onClickLogin">Submit</button>
    </div>
</template>
  
  <script>
  export default {
    name: 'LoginPage',
    data () {
      return {
        username: '',
        password: '',
      }
    },
    
    methods: {
      onClickLogin() {
        console.log('onClickLogin', this.username, this.password);
        if (this.username === 'admin' && this.password === 'admin') {
          this.$router.push({ path: '/' });
        }
      }
    },
  }
  </script>
  
  <style scoped>
  .login-form {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
  }

  .submit-button {
    width: 60px !important;
    height: 32px !important;
    margin: 0 auto;
  }
  </style>
  