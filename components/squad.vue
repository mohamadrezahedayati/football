<template>
    <div class="squad m-2">
        <div>
            <h4>{{name}}</h4>
        </div>
        <div class="d-flex justify-content-between flex-row-reverse">
            <span class="text-primary">{{role}}</span>
            <span>nationality : {{nationality}}</span>
        </div>
        <hr>
        <div class="d-flex justify-content-between flex-row-reverse">
            <span class="text-primary">{{position}}</span>
            <span>country Birth :{{countryOfBirth}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            squad:Object
        },
        computed: {
          name()  {
            return this.squad.name
          },
          nationality(){
            return this.squad.nationality
          },
          countryOfBirth(){
            return this.squad.countryOfBirth
          },
          role(){
            return this.squad.role
          },
          position(){
            return this.squad.position
          },
        },
    }
</script>

<style lang="scss" scoped>
    .squad{
        border: 1px silver solid;
        border-radius: 4px;
        padding: 7px;
    }
</style>