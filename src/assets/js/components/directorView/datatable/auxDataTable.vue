<template lang="html">
  <div class="ui segment">
    <datatable
      :title="'Materias:'"
      :headers="this.headers()"
      :tableData="this.data()"
      :amountInPage="this.amountInPage()"
      :searchFunction="this.searchFunction"
      :negativeRowStyle="this.negativeRowStyleFunction"
    />
  </div>
</template>

<script>
  const DataTable = require('./datatable.vue')

  var courses = 0;

  export default {
    components:{ 'datatable': DataTable },
    methods: {
      headers(){
        return [
          {
          key: 'subject',
          title: 'Materia',
          sorted: this.orderedBy,
          tooltip: 'Mareria'
          },
          {
          key: 'c1',
          title: '#C1',
          sorted: this.orderedBy,
          tooltip: 'Comision 1'
          },
          {
            key: 'c2',
            title: '#C2',
            sorted: this.orderedBy,
            tooltip: 'Comision 2'
          },
          {
            key: 'c3',
            title: '#C3',
            sorted: this.orderedBy,
            tooltip: 'Comision 3'
          }
        ]
      },
      data(){
        return [{
            subject: 'p1',
            c1: 'c1',
            c2: 'c2',
            c3: 'c3'
          },
          {
            subject: 'p2',
            c1: 'c4',
            c2: 'c5',
            c3: 'c6'
          },
          {
            subject: 'p3',
            c1: 'c7',
            c2: 'c8',
            c3: 'c9'
          }
        ]
      },
      searchFunction(data, text){
        return data.subject.toLowerCase().includes(text);
      },
      amountInPage(){
        return '2'
      },
      negativeRowStyleFunction(a){
        return a < 0
      },
      orderedBy(key, a, b){
        return a[key].localeCompare(b[key])
      }
    }
  };
</script>
