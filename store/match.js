import matchService from '@/services/matchService.js'

export const namespaced = true


export const state = () => ({

})

export const mutations = {
    SET_TODAY_MATCH(){
        
    }
}

export const actions = {
    getTodayMatch({commit}){
        return matchService.getMatchsToday().then( response =>{
            console.log(response.data)
        })
    }
}