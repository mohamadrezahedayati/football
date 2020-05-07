<template>
    <div class="container-team-card">
        <nuxt-link to="">
            <b-card :title="team.name" :img-src="getImg()" img-width="200px" img-alt="Image" img-top tag="article" class="mb-2">
            <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
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
                    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
                    var http = new XMLHttpRequest();
                    http.open('HEAD',this.team.crestUrl, false);
                    http.send();
                    if(http.status =='404') {
                        return '/team.jpg'
                    } else {
                        return this.team.crestUrl
                    }
                } else {
                    return '/team.jpg'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>