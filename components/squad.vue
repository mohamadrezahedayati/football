<template>
    <div class="squad m-2">
        <div>
            <h4>{{name}}</h4>
        </div>
        <div>
            <span>nationality : {{nationality}}</span>
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
          }
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