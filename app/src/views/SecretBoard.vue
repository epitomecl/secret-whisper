<template>
  <div>
    <BoardTable :items="allItems" v-on:create-item="onCreateItem" v-on:update-item="onUpdateItem" />
  </div>
</template>

<script>
import Web3 from 'web3'
const web3 = new Web3();

import * as WhisperService from '@/services/WhisperService'
import { mapActions, mapMutations, mapGetters } from 'vuex'

import BoardTable from '@/components/BoardTable'

export default {
  components: {
    BoardTable
  },
  data() {
    return {
      headers: [
        { text: 'Assignee_id', value: 'assignee_id' },        
        { text: 'Actions', value: 'action', sortable: false }
      ]
    }
  },  
  computed: {
    ...mapGetters('board', [
      'numItems',
      'allItems'
    ])
  },
  async mounted() {    
    await WhisperService.init()    
    await WhisperService.sendPublicMsg("testtete")

    this.onSubscribe()
  },
  methods: {    
    ...mapMutations('board', [
      'setItems',
      'addItem'
    ]),
    ...mapMutations('boardForm', [
      'setContent'
    ]),

    async onSubscribe () {
      WhisperService.subscribePublicMsg((data) => {
        // this.addItem(web3.utils.toAscii(data.payload))
        const content = web3.utils.toAscii(data.payload)
        console.log(content)
        this.addContent(content)
      })
    },

    async addContent (content) {
      const item = {
        id: this.numItems,
        title: content,
        created_at: new Date()
      }
      this.setContent(item)
      this.addItem(item)
    },

    async onCreateItem (item) {
      // this.addContent(item.title)
      await WhisperService.sendPublicMsg(item.title)
    },

    async onUpdateItem (id, item) {
      // this.addContent(item.title)
      await WhisperService.sendPublicMsg(item.title)
    }
  }
}

</script>