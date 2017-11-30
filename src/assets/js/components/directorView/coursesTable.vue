<template lang="html">
  <div class="ui segment">
    <h2>Materias:</h2>
  <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Materia</sui-table-header-cell>
        <sui-table-header-cell>Comisión</sui-table-header-cell>
        <sui-table-header-cell>Cupos</sui-table-header-cell>
        <sui-table-header-cell>Cupos Disponibles</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <template v-for="offer in getCurrentOffer">
        <template v-for="info in offer.info">
          <sui-table-row v-bind:class="{ negative: (createAvailableCapacity(info) < 0) }">
            <sui-table-cell>{{offer.name}}</sui-table-cell>
            <sui-table-cell>{{info.name}}</sui-table-cell>
            <sui-table-cell>{{createTotalCapacity(info)}}</sui-table-cell>
            <sui-table-cell>{{createAvailableCapacity(info)}}</sui-table-cell>
          </sui-table-row>
        </template>
      </template>
    </sui-table-body>
    <sui-table-footer>
      <sui-table-row>
        <sui-table-header-cell colspan="4">
          <sui-menu v-sui-floated:right pagination>
            <a is="sui-menu-item"
              v-for="(item, index) in items()"
              v-on:click.native="goTo(index)"
              v-bind:class="{active: isActive(index)}">
              {{index + 1}}
            </a>
          </sui-menu>
        </sui-table-header-cell>
      </sui-table-row>
    </sui-table-footer>
  </sui-table>
</div>
</template>
<script>

  export default {
    props:['offers'],
    data(){
      return {
        currentOffer: [],
        currentPage: 0,
        amountInPage: 2
      }
    },
    created(){
      this.updateCurrentOffer()
    },
    methods: {
      createTotalCapacity(info){
        return info.capacity ? info.amount + "/" + info.capacity : info.amount
      },
      createAvailableCapacity(info){
        return info.capacity ? info.capacity - info.amount : " - "
      },
      updateCurrentOffer(){
        var starts = this.currentPage * this.amountInPage
        var ends = starts + this.amountInPage
        return this.offers.slice(starts, ends);
      },
      items(){
        return Array(Math.ceil(this.offers.length / this.amountInPage)).fill(1)
      },
      goTo(index){
        this.currentPage = index;
        this.updateCurrentOffer()
      },
      isActive(index){
        return index === this.currentPage
      }
    },
    computed:{
      getCurrentOffer(){
        return this.updateCurrentOffer()
      }
    }
  };
</script>
