<template>
<div class="layout-padding docs-input row justify-center">
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
              <q-btn flat round small @click="publishDream" color="green"><q-icon name="done" /></q-btn>
              </q-card-actions>
            </q-card>
  </div>
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
  name: 'add-dream',
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
  data () {
    return {
      dream: ''
    }
  },
  computed: {
  },
  methods: {
    publishDream (e, done) {
      console.log(this.dream)

      let vision = new Vision({text: this.dream})
      console.log(vision)
      vision.save()
      // done()
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
