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
  name: 'decideAlternativeVisionQuestions',
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
  props: ['question'],
  data () {
    return {
    }
  },
  computed: {
    firstDream: function () {
      return this.question.visionAssociation.vision1
    },
    secoundDream: function () {
      return this.question.visionAssociation.vision2
    }
  },
  methods: {
    selected (i, id) {
      this.question.result = i
      this.question.save().then((success) => {
        this.$emit('nextCard')
      })
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
