<template>
    <q-card>
      <q-card-title>
        In my dream, the wold..
      </q-card-title>
      <q-card-separator />
        <q-card-main>
          <q-card @click="selected(1, firstDream.id)">
            <q-card-main>
              ..{{firstDream.text}}
            </q-card-main>
          </q-card>
          <q-card @click="selected(2, secoundDream.id)">
            <q-card-main>
              ..{{secoundDream.text}}
            </q-card-main>
          </q-card>
        </q-card-main>
      </q-card>
</template>

<script>

import {
  QBtn,
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
  QParallax,
  QIcon,
  QPopover,
  QVideo,
  QFab,
  QFabAction,
  QTooltip,
  QFixedPosition,
  Dialog,
  Toast,
  QInput
} from 'quasar'

export default {
  name: 'validate-change',
  components: {
    QBtn,
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
    QParallax,
    QIcon,
    QPopover,
    QVideo,
    QFab,
    QFabAction,
    QTooltip,
    QFixedPosition,
    Dialog,
    Toast,
    QInput
  },
  props: ['cardData'],
  data () {
    return {
      currentDream: 'is a place where all humans only use goods that can be recycled',
      edit: false
    }
  },
  computed: {
    firstDream: function () {
      return this.cardData.alternatives[0]
    },
    secoundDream: function () {
      return this.cardData.alternatives[1]
    }
  },
  methods: {
    selected (i, id) {
      console.log(i)
      console.log(id)
      this.$emit('nextCard')
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
