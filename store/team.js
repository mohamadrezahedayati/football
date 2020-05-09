import matchService from '@/services/matchService.js'
import Vue from 'vue'

export const namespaced = true

export const state = () => ({
    teams:[],
    team:''
})

export const mutations = {
    SET_TEAMS(state,data){
        Vue.set(state,'teams',data)
    },
    SET_TEAM(state,data){
        Vue.set(state,'team',data)
    },
}

export const actions = {
    getTeams({commit}){
        return matchService.getTeams().then( response =>{
            commit('SET_TEAMS',response.data.teams)
        }).catch(error =>{
            console.log(error)
        })
    },
    getTeam({commit},id){
        console.log(id)
        return matchService.getTeam(id).then(response => {
            commit('SET_TEAM',response.data)
        }).catch(error =>{
            console.log(error)
        })
    }
}