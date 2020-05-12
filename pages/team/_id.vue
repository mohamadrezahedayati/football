<template>
  <div class="container-page-team">
    <div class="team-info d-flex align-items-center"  :style="teamColors">
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
        <div class="details-team">
          <span> phone : {{phone}}</span>
        </div>
        <div class="details-team">
          <span> email : {{email}}</span>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <div class="title-squad d-flex justify-content-center">
        <h2>active competitions</h2>
      </div>
      <div class="container-squads container-fluid px-1">
        <b-list-group>
          <b-list-group-item v-for="competition in team.activeCompetitions" :key="competition.id">
            <span class="competition-name">{{competition.name}} |</span> <span>{{competition.area.name}}</span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <hr>
    <div>
      <div class="title-squad d-flex justify-content-center">
        <h2>squad</h2>
      </div>
      <div class="container-squads container-fluid px-1">
        <b-row>
            <b-col cols="12" sm="6" md="4" lg="4" xl="4" v-for="squad in team.squad" :key="squad.id" class="px-1">
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
        return `background-image: linear-gradient(45deg,${colors[1]}, ${colors[0]});`
      },
      phone(){
        return this.team.phone
      },
      email(){
        return this.team.email
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
.competition-name{
  
}
</style>