<template>
<div class="layout-padding card-examples row justify-center">
  <q-card v-for="vision in visions">
    <q-card-title>
      In my dream, the wold..
    </q-card-title>
    <q-card-separator />
      <q-card-main>
        <big>.. {{vision.text}}</big>
      </q-card-main>
    </q-card>
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" @click="$router.push('/addDream')" icon="add" />
      </q-fixed-position>

</div>
</template>

<script>

import {
  QCard,
  QVideo,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile,
  QCollapsible,
  QRating,
  QBtn,
  QParallax,
  QIcon,
  QPopover,
  QFab,
  QFabAction,
  QTooltip,
  QFixedPosition,
  Dialog,
  Toast
} from 'quasar'

import { Vision } from 'src/api'

export default {
  name: 'list-dream',
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QCollapsible,
    QRating,
    QBtn,
    QParallax,
    QIcon,
    QPopover,
    QVideo,
    QFab,
    QFabAction,
    QTooltip,
    QFixedPosition,
    Dialog,
    Toast
  },
  data () {
    return {
      visions: [
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  created () {
    Vision.all().then((response) => {
      this.visions = response.data
    })
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
