<template>
  <div class="ui secondary pointing menu">
    <a class="item" v-bind:class="{ active: currentPageIsHome()}" v-on:click="goHome()">Home</a>
    <div class="right menu">
      <a class="ui item" v-on:click="logout()">Logout</a>
    </div>
  </div>
</template>

<script>

  export default{
    name: 'MenuDirector',
    props:['home', 'currentPage', 'goHome'],
    methods: {
      currentPageIsHome(){
        return this.currentPage === this.home
      },
      logout(){
        console.log("TODO: borrar cookie y ir a homePage")
      }
    }
  }
</script>
