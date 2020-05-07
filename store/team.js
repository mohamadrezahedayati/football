import matchService from '@/services/matchService.js'
import Vue from 'vue'

export const namespaced = true

export const state = () => ({
    teams:[]
})

export const mutations = {
    SET_TEAMS(state,data){
        Vue.set(state,'teams',data)
    }
}

export const actions = {
    getTeams({commit}){
        return matchService.getTeams().then( response =>{
            commit('SET_TEAMS',response.data.teams)
        }).catch(error =>{
            console.log(error)
        })
    },
}