<template>
<q-layout ref="layout" >

  <q-toolbar slot="header">
    <q-toolbar-title @click="$router.push('/')">
      LuboU
      <div slot="subtitle">Let's build our Utopia</div>
    </q-toolbar-title>

    <q-btn @click="$router.push('/listDreams')" flat>
      Our World
      <q-icon name="public" />
    </q-btn>
    <q-btn @click="auth.logout" flat>
      Logout
      <q-icon name="public" />
    </q-btn>
  </q-toolbar>
  <router-view :auth="auth" :authenticated="authenticated" />

</q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

import AddDream from '@/AddDream'

export default {
  name: 'index',
  props: ['auth', 'authenticated'],
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    AddDream
  },
  data () {
    return {
      orienting: window.DeviceOrientationEvent && !this.$q.platform.is.desktop,
      rotating: window.DeviceMotionEvent && !this.$q.platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  },
  computed: {
    position () {
      const transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    launch (url) {
    },
    move (evt) {
    },
    rotate (evt) {
    },
    orient (evt) {
    }
  },
  mounted () {
  },
  beforeDestroy () {
    if (this.orienting) {
      window.removeEventListener('deviceorientation', this.orient, false)
    }
    else if (this.rotating) {
      window.removeEventListener('devicemove', this.rotate, false)
    }
    else {
      document.removeEventListener('mousemove', this.move)
    }
  }
}
</script>

<style lang="stylus">
</style>
