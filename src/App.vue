<template>
  <div id="page">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
	body{
	  background: #F5F5F5;
	  color: #333;
	}

	#page{
	  background: #FFF;
	  padding: 3rem;
	}
	</style>

<script>
  export default{
    data(){ return {} }
  }
</script>
