<template lang="html">
  <div>
    <sui-input v-if="searchFunction" v-model="message" placeholder="busqueda" icon="search" />
    <offer-card
      v-for="data in getCurrentData"
      v-bind:offer="data"
      style="width:100%" />
    <sui-table-footer v-if="amountInPage">
      <sui-table-row>
        <sui-table-header-cell colspan="4">
          <sui-menu class="ui right floated pagination menu">
            <a is="sui-menu-item"
              v-for="(item, index) in items"
              v-on:click.native="goTo(index)"
              v-bind:class="{active: isActive(index)}">
              {{index + 1}}
            </a>
          </sui-menu>
        </sui-table-header-cell>
      </sui-table-row>
    </sui-table-footer>
  </div>
</template>

<script>
  const OfferCard = require('./offerCard.vue');

  var currentListData = []

  export default {
    props:['listData', 'searchFunction', 'amountInPage'],
    data(){
      return {
        message: '',
        length: 0,
        currentPage: 0
      }
    },
    components:{
      'offer-card': OfferCard
    },
    created(){
      this.length = this.listData.length
    },
    methods: {
      updateCurrentData(){
        currentListData = this.filterListData();
        this.length = currentListData.length
        console.log(this.currentPage)
        console.log(this.length)
        this.currentPage = (this.length / this.amountInPage) > this.currentPage ? this.currentPage : 0
        var starts = this.currentPage * (this.amountInPage ? this.amountInPage : 0)
        var ends = starts + (this.amountInPage ? this.amountInPage : tableData.length)
        return currentListData.slice(starts, ends);
      },
      filterListData(){
        this.length = 0
        return this.listData.filter(data => this.searchFunction ? this.searchFunction(data, this.message) : true)
      },
      currentItems(){
        return Array(Math.ceil(this.length / this.amountInPage)).fill(1)
      },
      goTo(index){
        this.currentPage = index
      },
      isActive(index){
        return index === this.currentPage
      }
    },
    computed:{
      getCurrentData: function(){
        return this.updateCurrentData()
      },
      items(){
        return this.currentItems()
      }
    }
  };
</script>
