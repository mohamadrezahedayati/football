<template>
  <div class="container-page-team">
    <div class="team-info d-flex align-items-center">
      <div class="logo-team" style="width:200px">
        <img :src="teamLogo" style="width:100%" alt="">
      </div>
      <div class="d-flex flex-column ml-3">
        <div class="name">
          <h2>{{teamName}}</h2>
        </div>
        <div class="details-team">
          <span> Official Website : <a :href="teamWebsite" target="_blank">{{teamWebsite}}</a></span>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <div class="title-squad d-flex justify-content-center" :style="teamColors">
        <h2>squad</h2>
      </div>
      <div class="container-squads container-fluid px-1">
        <b-row>
            <b-col cols="4" v-for="squad in team.squad" :key="squad.id" class="px-1">
                <Squad :squad="squad"></Squad>
            </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Squad from '@/components/squad.vue'
  export default {
    components:{
      Squad
    },
    computed: {
      ...mapState('team',['team']),
      teamName(){
        return this.team.name
      },
      teamLogo(){
        if (this.team.crestUrl != null) {
          return this.team.crestUrl
        } else {
          return '/team.jpg'
        }
      },
      teamWebsite(){
        return this.team.website
      },
      teamColors(){
        var colors = this.team.clubColors.split(" /")
        console.log(colors[0])
        return `background-image: linear-gradient(45deg,${colors[0]}, ${colors[1]});`
      }
    },
    async fetch({store,error,params}) {
      try {
        await store.dispatch('team/getTeam',params.id)
      } catch (e) {
        error({
          statusCode: 503,
          message: 'unable fetch data'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.container-squads{

}
</style>