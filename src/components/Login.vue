<template>
<div class="layout-padding docs-input row justify-center">
</div>
</template>

<script>

export default {
  name: 'login',
  props: ['auth', 'authenticated'],
  mounted () {
    if (!this.authenticated) {
      this.auth.login()
    }
    else {
      this.$router.push({path: '/'})
    }
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
