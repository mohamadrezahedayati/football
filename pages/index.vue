<template>
    <div>
        <b-row>
            <b-col cols="4" v-for="team in teams" :key="team.id" >
                <CardTeam :team="team"></CardTeam>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import CardTeam from '@/components/CardTeam.vue'
export default {
    components:{
        CardTeam
    },
    async fetch({ store, error}) {
    try {
        await store.dispatch('team/getTeams')
    } catch (e) {
        error({
            statusCode: 503,
            message: 'unable fetch data'
        })
    }
    },
    computed: {
        ...mapState('team',['teams'])
    },
}
</script>

<style lang="scss" scoped>

</style>