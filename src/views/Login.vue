<template>
  <div class="pt-5">
    <h1 v-if="email">Hello, {{email}}</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="email" type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username">
        <small id="usernameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="lozinka" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: '',
      lozinka: '',
    }
  },
  methods: {
    login() {
      this.$axios.post('/api/user/login', {
        email: this.email,
        lozinka: this.lozinka,
      }).then(response => {
        console.log(response)
        localStorage.setItem('jwt', response.data.jwt)
        this.$cookies.set(response.date.name, response.date.value, "-1")
        this.$router.push({name: 'News'})
      })
    }
  }
}
</script>

<style scoped>

</style>