import axios from 'axios'

const apiClinet = axios.create({
    baseURL:'https://api.football-data.org/v2/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type' : 'application/json',
        'X-Auth-Token':'bf89e3ad29124b1b9d8387f49314dbcf'
    }
})

export default { 
    getTeams(){
        return apiClinet.get('teams')
    },
    getMatchsToday(){
        return apiClinet.get('matches')
    },
    getTeam(teamID){
        return apiClinet.get(`teams/${teamID}`)
    }
}