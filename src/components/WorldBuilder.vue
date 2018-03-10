<template>
<div class="layout-padding row justify-center">
  <div ref="cardPlaceholder" style="width: 500px; max-width: 90vw;">
    <component v-bind:question="question" v-bind:is="currentQuestionType" v-on:nextCard="nextCard">
    </component>
  </div>
  <q-fixed-position corner="bottom-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="$router.push('/addDream')" icon="add" />
    </q-fixed-position>
</div>
</template>

<script>

import { QuestionWrapper } from 'src/api'

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

import VoteVisionQuestions from '@/ValidateDream'
import DecideAlternativeVisionQuestions from '@/ValidateChange'
import addDreamQuestions from '@/AddDreamQuestion'
import ValidatePlaceholder from '@/ValidatePlaceholder'

import { camelize, underscore } from 'inflected'

export default {
  name: 'world-builder',
  components: {
    VoteVisionQuestions,
    ValidatePlaceholder,
    DecideAlternativeVisionQuestions,
    addDreamQuestions,
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
      question: null,
      count: 0
    }
  },
  computed: {
    currentQuestionType: function () {
      if (this.question != null) {
        return camelize(underscore(this.question.resourceIdentifier.type), false)
      }
      else {
        return 'validate-placeholder'
      }
    },
    currentIndex: function () {
      return this.count % this.dreams.length
    }
  },
  methods: {
    nextCard: function () {
      console.log('nextCard')
      let question = new QuestionWrapper({})
      question.save().then((newQuestion) => {
        this.question = question.question
        this.count += 1
      })
    }
  },
  created () {
    this.nextCard()
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
