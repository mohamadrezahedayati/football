<template>
  <div>
    <div v-for="(competition,index) in competitions.competitions" :key="index">
      <div class="d-flex align-items-center">
        <div class="indexCompetition">
          {{index+1}}
        </div>
        <div class="ml-4 mb-1">
          <div class="mb-2">name : {{competition.name}}</div>
          <span>id : {{competition.id}}</span>
          <span class="ml-2">area : {{competition.area.name}}</span>
          <span class="ml-2">Updated : {{competition.lastUpdated}}</span>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    async fetch({store,error,params}) {
      try {
        await store.dispatch('competition/getCompetitions')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'unable fetch data'
        })
      }
    },
    computed: {
      ...mapState('competition',['competitions']),

    },
  }
</script>

<style lang="css" scoped>
.indexCompetition{
    border: 1px silver solid;
    padding: 10px 15px;
}
</style>
