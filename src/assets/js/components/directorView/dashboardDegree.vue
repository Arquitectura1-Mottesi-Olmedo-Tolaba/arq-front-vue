<template>
  <div>
    <h1>Carreras</h1>
    <sui-table celled padded>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Nombre</sui-table-header-cell>
          <sui-table-header-cell>Acciones</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <sui-table-row v-for="degree in degrees">
          <sui-table-cell> {{degree.name}} </sui-table-cell>
          <sui-table-cell>
            <sui-button-group>
              <sui-button icon="browser" primary v-on:click.native="goToDegree(degree.id)" />
              <sui-button icon="edit" v-on:click.native="edit(degree.id)" />
            </sui-button-group>
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
import DirectorService from '../../services/directorService';

export default {
  name: 'DashboardDegree',
  data(){
    return{
      degrees: []
    }
  },
  props: ['onChange'],
  created: function(){
    this.fetchDegrees();
  },
  methods: {
    fetchDegrees(){
      DirectorService.fetchDegrees().then(
        response => this.degrees = response.body
      , response => {}
      )
    },
    edit(degreeId){
      console.log("TODO: go to edit")
    },
    goToDegree(degreeId){
      this.onChange(degreeId)
    }

  }

};
</script>
