<template>
    <div class="container-team-card">
        <nuxt-link :to="'team/' + team.id">
            <b-card :title="team.name" :img-src="getImg()" img-alt="Image" img-top tag="article" class="mb-2">
            <b-card-text>
                <div>
                    <span>short name : </span>
                    <span>{{team.shortName}}</span>
                </div>
                <hr>
                <div>
                    <span>Area:</span>
                    <span>{{team.area.name}}</span>
                </div>
            </b-card-text>
            </b-card>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props:{
            team:Object
        },
        methods: {
            getImg(){
                if(this.team.crestUrl != null){
                    return this.team.crestUrl
                } else {
                    return '/team.jpg'
                }
            }
        },
    }
</script>

<style scoped>
    .container-team-card img{
        margin: 0 auto;
        width: 40% !important;
    }
</style>