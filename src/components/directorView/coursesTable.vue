<template lang="html">
  <div class="ui segment">
    <datatable v-if="amount != 0"
      :title="'Materias:'"
      :headers="this.computedHeaders"
      :tableData="this.computedData"
      :amountInPage="this.amountInPage"
      :searchFunction="this.searchFunction"
      :negativeRowStyle="this.styleRow"
    />
  </div>
</template>

<script>
  import DataTable from '@/components/directorView/datatable/datatable.vue'

  var courses = 0;

  export default {
    props:['offers'],
    components:{ 'datatable': DataTable },
    data(){
      return {
        tableData: [],
        amountInPage: 15,
        searchFunction: this.searchFun,
        styleRow: this.negativeRowStyleFunction
      }
    },
    methods: {
      currentHeader(amount){
        var header = [];
        header.push({key:'subject', title: 'Materia', sorted: this.subjectSorted })
        header = header.concat(this.coursesHeader(amount));
        header.push({key: 'ny', title: '#TN', tooltip: 'Todavia no la voy a cursar', sorted: this.amountSorted});
        return header
      },
      coursesHeader(amount){
        return Array(amount).fill(1).map((value, index) => {
          var currentKey = 'c' + index;
          var currentTitle = '#C'+ (index + 1);
          var currentFullName = "Comision " + (index + 1);
          return { key: currentKey, title: currentTitle, tooltip: currentFullName, sorted: this.courseSorted };
        })
      },
      currentData(amount){
        return this.offers.reduce((array, offer)  => array.concat(this.createRows(amount, offer.info, offer.subject.name)), [])
      },
      createRows(amount, info, subjectName){
        var object = { subject: subjectName, ny: this.amountFor("Todavia no la voy a cursar", info)};
        if(info.length === 0) { } else {
          Array(amount).fill(1).forEach((value, index) => {
            var key = 'c' + index;
            object[key] = this.corseAmount(index + 1, info)
          })
        }
        return object
      },
      amountFor(property, courseInformations){
        return courseInformations.find(info => info.name === property).amount
      },
      corseAmount(courseNumber, courseInformations){
        var property = "Comision " + courseNumber
        var course = courseInformations.find(info => info.name === property)
        return course ? course.amount + "/" +  course.capacity : " - "
      },
      searchFun(data, text){
        return data.subject.toLowerCase().includes(text);
      },
      subjectSorted(key, a, b){
        return a[key].localeCompare(b[key])
      },
      courseSorted(key, a, b){
         if(a[key] === ' - '){
           return -1
         }
         if(b[key] === ' - ') {
           return 1
         }
        var realA = eval(a[key].split('/').reverse().join('-'));
        var realB = eval(b[key].split('/').reverse().join('-'));
        return realA > realB ? -1 : 1
      },
      amountSorted(key, a, b){
        return a[key] > b[key] ? -1 : 1
      },
      negativeRowStyleFunction(data){
        return Object.keys(data).filter(key => key[0] === 'c' && key.length === 2).reduce((res, key) => res ? true : this.isNegative(data[key]), false)
      },
      isNegative(value){
        if(value === ' - '){ return false }
        return eval(value.split('/').reverse().join('-')) < 0
      }
    },
    computed: {
      amount(){
        var howManyCourses = (courseInformations) => {
          return courseInformations.reduce((res, info) => info.name.includes("Comision") ? res + 1 : res, 0);
        }
        return this.offers.reduce((res, offer) => {
          var courses = howManyCourses(offer.info);
          return courses > res ? courses : res
        }, 0);
      },
      computedHeaders(){
        var amount = this.amount;
        return this.currentHeader(amount)
      },
      computedData(){
        var amount = this.amount;
        return this.currentData(amount)
      }
    }
  };
</script>
