<template>
<!-- Don't drop "q-app" class -->
<div id="q-app">
  <router-view :auth="auth" :authenticated="authenticated" />
</div>
</template>

<script>
/*
 * Root component
 */

import AuthService from './auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  created () {
    if (!this.authenticated) {
      this.$router.push({path: '/login'})
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style></style>
