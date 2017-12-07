<template lang="html">
  <div class="ui segment">
    <datatable
      :title="'Materias:'"
      :headers="this.computedHeader"
      :tableData="this.computedData"
      :amountInPage="this.amountInPage()"
      :searchFunction="this.searchFunction"
      :negativeRowStyle="this.negativeRowStyleFunction"
    />
  </div>
</template>

<script>
  const DataTable = require('./datatable/datatable.vue')

  var courses = 0;

  export default {
    props:['offers'],
    components:{ 'datatable': DataTable },
    methods: {
      currentCourses(){
        courses === 0 ? courses = this.countCourses() : courses;
        return courses
      },
      countCourses(){
        return this.offers.reduce((maxCourses, offer) => {
          return maxCourses < offer.info.length -1 ? offer.info.length -1 : maxCourses
        }, 0)
      },
      currentHeader(){
        var header = [];
        header.push({key:'subject', title: 'Materia', sorted: this.subjectSorted })
        this.coursesHeader(header);
        console.log(this.currentCourses());
        header.push({key: 'ny', title: '#TN', fullName: 'Todavia no la voy a cursar'});
        return header
      },
      coursesHeader(header){
        return Array(this.currentCourses()).fill(1).forEach((value, index) => {
          var currentKey = 'c' + index;
          var currentTitle = '#C'+ (index + 1);
          var currentFullName = "Comision " + (index + 1);
          header.push({ key: currentKey, title: currentTitle, fullNane: currentFullName, sorted: this.amountSorted });
        })
      },
      dataTable(){
        return this.offers.reduce((array, offer)  => array.concat(this.createRows(offer.info, offer.name)), [])
      },
      createRows(info, subjectName){
        var object = { subject: subjectName };
        if(info.length === 0) {} else{
          var infoAux = info;
          object['ny'] = infoAux.pop().amount;
          Array(this.currentCourses()).fill(1).forEach((value, index) => {
            var key = 'c'+index;
            object[key] = (info[index] ? ("" + info[index].amount + "/" + info[index].capacity) : " - ")
          })
        }
        return object
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
        // if(a === ' - '){
        //   return -1
        // }
        // if(b === ' - ') {
        //   return 1
        // }
        //console.log(a);
        //var realA = eval(a.split('/').join('-'));
        //var realB = eval(b.split('/').join('-'));
        return a > b ? -1 : 1
      },
      negativeRowStyleFunction(a){
        return a.currentAmount < 0
      }
    },
    computed: {
      computedHeader(){
        return this.currentHeader()
      },
      computedData(){
        return this.dataTable()
      }
    }
  };
</script>
