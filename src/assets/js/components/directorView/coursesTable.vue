<template lang="html">
  <div class="ui segment">
    <datatable
      :title="'Materias:'"
      :headers="this.currentHeader()"
      :tableData="this.dataTable()"
      :amountInPage="this.amountInPage()"
      :searchFunction="this.searchFunction"
      :negativeRowStyle="this.negativeRowStyleFunction"
    />
  </div>
</template>

<script>
  const DataTable = require('./datatable/datatable.vue')

  export default {
    props:['offers'],
    components:{ 'datatable': DataTable },
    methods: {
      currentHeader(){
        return [
          {key:'subject', title: 'Materia', sorted: this.subjectSorted },
          {key:'course', title: 'Comisión'},
          {key:'amount', title: 'Cupos', tooltip:"Hell"},
          {key:'currentAmount', title: 'Cupos Disponibles', sorted: this.amountSorted}
        ]
      },
      dataTable(){
        return this.offers.reduce((array, offer)  => array.concat(this.createRows(offer.info, offer.name)), [])
      },
      createRows(info, subjectName){
        return info.map(information => {
          return {
            subject: subjectName,
            course: information.name,
            amount: this.createTotalCapacity(information),
            currentAmount: this.createAvailableCapacity(information)
          }
        })
      },
      createTotalCapacity(info){
        return info.capacity ? info.amount + "/" + info.capacity : info.amount
      },
      createAvailableCapacity(info){
        return info.capacity ? info.capacity - info.amount : " - "
      },
      searchFunction(data, text){
        return data.subject.toLowerCase().includes(text);
      },
      amountInPage(){
        return '15'
      },
      subjectSorted(a,b){
        return a.subject.localeCompare(b.subject)
      },
      amountSorted(a,b){
        if(typeof a.currentAmount == 'string'){
          return -1
        }
        if(typeof b.currentAmount == 'string') {
          return 1
        }
        return a.currentAmount > b.currentAmount ? -1 : 1
      },
      negativeRowStyleFunction(a){
        return a.currentAmount < 0
      }
    }
  };
</script>
