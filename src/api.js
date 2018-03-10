import { JSORMBase, attr, hasOne } from 'jsorm'

const ApplicationRecord = JSORMBase.extend({
  static: {
    baseUrl: 'http://localhost:8080', // set to '' in browser for relative URLs
    keyCase: { server: 'dash', client: 'camel' },
    apiNamespace: '/api/v1',
    requestOptions: {
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    },
    fetchOptions: function () {
      let options = this.requestOptions

      if (this.getJWT()) {
        options.headers.Authorization = this.generateAuthHeader(this.getJWT())
      }
      return options
    }
  }
})

const Vision = ApplicationRecord.extend({
  static: {
    jsonapiType: 'visions'
  },
  attrs: {
    derivedFromId: attr(),
    text: attr(),
    upVoteCount: attr({persist: false}),
    downVoteCount: attr({persist: false})
  }
})

const QuestionWrapper = ApplicationRecord.extend({
  static: {
    jsonapiType: 'question-wrappers'
  },
  attrs: {
    question: hasOne()
  }
})

const VoteVisionQuestion = ApplicationRecord.extend({
  static: {
    jsonapiType: 'vote-vision-questions'
  },
  attrs: {
    result: attr(),
    vision: hasOne()
  }
})

const DecideAlternativeVisionQuestion = ApplicationRecord.extend({
  static: {
    jsonapiType: 'decide-alternative-vision-questions'
  },
  attrs: {
    result: attr(),
    visionAssociation: hasOne()
  }
})

const VisionAssociation = ApplicationRecord.extend({
  static: {
    jsonapiType: 'vision-associations'
  },
  attrs: {
    vision1: hasOne(),
    vision2: hasOne()
  }
})

export {
  Vision,
  VoteVisionQuestion,
  DecideAlternativeVisionQuestion,
  VisionAssociation,
  QuestionWrapper
}
