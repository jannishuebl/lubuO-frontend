<template>
<div style="width: 500px; max-width: 90vw;">
  <q-card>
    <q-card-title>
      In my dream, the wold..
    </q-card-title>
    <q-card-separator />
      <q-card-main>
        <q-input v-model="dream" placeholder="is a place where mushrooms taste like apples" type="textarea" />
        </q-card-main>
        <q-card-separator />
          <q-card-actions align="around">
            <q-btn flat round small @click="retry" color="blue"><q-icon name="cached" /></q-btn>
            <q-btn flat round small @click="publishDream" color="green"><q-icon name="done" /></q-btn>
            </q-card-actions>
          </q-card>
</div>
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

import { Vision } from 'src/api'

export default {
  name: 'addDreamQuestions',
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
      dream: ''
    }
  },
  computed: {
  },
  methods: {
    retry (e, done) {
      this.$emit('nextCard')
    },
    publishDream (e, done) {
      let vision = new Vision({text: this.dream})
      vision.save().then((success) => {
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
