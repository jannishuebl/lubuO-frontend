<template>
<div class="layout-padding row justify-center">
  <div ref="cardPlaceholder" style="width: 500px; max-width: 90vw;">
    <component v-bind:card-data="currentCard.data" v-bind:is="currentCard.type" v-on:nextCard="nextCard">
    </component>
  </div>
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

import ValidateDream from '@/ValidateDream'
import ValidateChange from '@/ValidateChange'

export default {
  name: 'world-builder',
  components: {
    ValidateDream,
    ValidateChange,
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
        { type: 'validate-dream',
          data: {
            id: 1,
            text: 'is a place where all humans only use goods that can be recycled'
          }
        },
        { type: 'validate-change',
          data: {
            alternatives: [
              {
                id: 1,
                text: 'is a place where all humans only use goods that can be recycled'
              }, {
                id: 2,
                text: 'is a place where all humans only use goods that can grow up again'
              }
            ]
          }
        }
      ],
      count: 0
    }
  },
  computed: {
    currentCard: function () {
      return this.dreams[this.currentIndex]
    },
    currentIndex: function () {
      return this.count % this.dreams.length
    }
  },
  methods: {
    nextCard: function () {
      this.count += 1
      console.log('nextCard')
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
