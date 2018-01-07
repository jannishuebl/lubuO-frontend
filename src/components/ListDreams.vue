<template>
<div class="layout-padding card-examples row justify-center">
  <q-card v-for="dream in dreams">
    <q-card-title>
      In my dream, the wold..
    </q-card-title>
    <q-card-separator />
      <q-card-main>
        <big>.. {{dream}}</big>
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
      dreams: [
        'is a place where all people are treated with respect',
        'is a place where all humans only use goods that can be recycled',
        'is a place where humans and animals live together'
      ]
    }
  },
  computed: {
  },
  methods: {
    publishDream (e, done) {
      console.log(this.dream)
      done()
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
