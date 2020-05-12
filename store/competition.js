import competitionService from '@/services/competitionService.js'
import Vue from 'vue'

export const namespaced = true

export const state = () => ({
    competitions:[]
})

export const mutations = {
    SET_COMPETITIONS(state,data){
        Vue.set(state,'competitions',data)
    }
}

export const actions = {
    getCompetitions({commit}){
        return competitionService.getCompetitions().then(response => {
            console.log(response.data)
            commit('SET_COMPETITIONS',response.data)
        })
    }
}