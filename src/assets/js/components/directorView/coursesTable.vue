<template lang="html">
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
      <template v-for="offer in offers">
        <template v-for="info in offer.info">
          <sui-table-row>
            <sui-table-cell>{{offer.name}}</sui-table-cell>
            <sui-table-cell>{{info.name}}</sui-table-cell>
            <sui-table-cell>{{createTotalCapacity(info)}}</sui-table-cell>
            <sui-table-cell>{{createAvailableCapacity(info)}}</sui-table-cell>
          </sui-table-row>
        </template>
      </template>
    </sui-table-body>
  </sui-table>
</template>
<script>

  export default {
    props:['offers'],
    methods: {
      createTotalCapacity(info){
        return info.capacity ? info.amount + "/" + info.capacity : info.amount
      },
      createAvailableCapacity(info){
        return info.capacity ? info.capacity - info.amount : " - "
      }
    }
  };
</script>
