<template>
  <div>
    <menu-director :home="'degree-list'" v-bind:currentPage="this.realPage" :goHome="this.goToHomePage" :logout="this.logout"/>
    <div class="ui segment">
      <component :is="currentView" v-bind="currentProperties"></component>
    </div>
  </div>
</template>

<script>
  import DirectorService from '../../services/directorService';
  const MenuDirector = require('./menuDirector.vue');
  const DegreeList = require('./dashboardDegree.vue');
  const DashboardAcademicOffer = require('./dashboardAcademicOffer.vue');

  var page = "degree-list";
  var degreeID = 0;

  export default{
    name: 'DirectorHomePage',
    components:{
      'menu-director': MenuDirector,
      'degree-list': DegreeList,
      'dashboard-academic-offer': DashboardAcademicOffer
    },
    methods: {
      currentPage(anotherPage){
        this.realPage = anotherPage;
      },
      changeCurrentPageTo(page){
        this.currentPage(page)
        this.currentView = page
      },
      goToHomePage(){
        this.changeCurrentPageTo('degree-list')
      },
      goToAcademicOfferDashboard(degreeID){
        this.degreeID = degreeID
        this.changeCurrentPageTo('dashboard-academic-offer')
      },
      logout(){
        DirectorService.logout()
        this.$router.push('/')
      }
    },
    data(){
      return {currentView: 'degree-list', realPage: page}
    },
    computed: {
      currentProperties: function() {
        if (this.currentView === 'degree-list') {
          return { onChange: this.goToAcademicOfferDashboard }
        }
        if (this.currentView === 'dashboard-academic-offer') {
          return { degreeID: this.degreeID, goHome: this.goToHomePage }
        }
      }
    }
  }
</script>
