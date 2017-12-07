<template lang="html">
  <div>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="10">
          <h2>{{title}}</h2>
        </sui-grid-column>
        <sui-grid-column :width="3">
          <sui-input v-if="searchFunction" v-model="message" placeholder="busqueda" icon="search" />
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <sui-table celled>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell v-for="(header, index) in headers">
            {{header.title}}
            <a v-on:click="sorted(header.sorted, index)" v-if="header.sorted"><sui-icon :name="icon(index)" /></a>
          </sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <template v-for="data in getCurrentData">
          <sui-table-row>
            <sui-table-cell v-for="header in headers" :class="{negative: negativeRowStyle(data)}">{{data[header.key]}}</sui-table-cell>
          </sui-table-row>
        </template>
      </sui-table-body>
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
    </sui-table>
  </div>
</template>

<script>

  var currentTableData = []

  export default {
    props:['title','headers', 'tableData', 'amountInPage', 'searchFunction', 'negativeRowStyle'],
    data(){
      return {
        currentPage: 0,
        message: '',
        orderedBy: [],
        orderedProperty: [],
        currentColumnSorted: 0,
        length: 0
      }
    },
    created(){
      this.orderedProperty = Array(this.headers.length).fill("sort");
      this.length = this.tableData.length
    },
    methods: {
      updateCurrentData(){
        currentTableData = this.filterTableData();
        this.length = currentTableData.length
        this.currentPage = (this.length / parseInt(this.amountInPage)) > this.currentPage ? this.currentPage : 0
        currentTableData = this.sortedTableData(currentTableData);
        var starts = this.currentPage * (this.amountInPage ? parseInt(this.amountInPage) : 0)
        var ends = starts + (this.amountInPage ? parseInt(this.amountInPage) : this.tableData.length)
        return currentTableData.slice(starts, ends);
      },
      filterTableData(){
        return this.tableData.filter(data => this.searchFunction ? this.searchFunction(data, this.message) : true)
      },
      sortedTableData(currentTableData){
        return this.orderedBy[this.currentColumnSorted] ? this.applySorted(currentTableData) : currentTableData
      },
      applySorted(currentTableData){
        switch (this.orderedProperty[this.currentColumnSorted]) {
          case "sort ascending":
            return currentTableData.sort((a,b) => this.orderedBy[this.currentColumnSorted].fun(this.orderedBy[this.currentColumnSorted].key, a, b))
          case "sort descending":
            return currentTableData.sort((a,b) => this.orderedBy[this.currentColumnSorted].fun(this.orderedBy[this.currentColumnSorted].key, b, a))
          default:
            return currentTableData
        }
      },
      currentItems(){
        return Array(Math.ceil(this.length / parseInt(this.amountInPage))).fill(1)
      },
      goTo(index){
        this.currentPage = index
      },
      isActive(index){
        return index === this.currentPage
      },
      icon(index){
        return this.orderedProperty[index] ? this.orderedProperty[index] : ''
      },
      updateIcon(index){
        switch (this.orderedProperty[index]) {
          case "sort ascending":
            this.orderedProperty = Array(this.headers.length).fill("sort")
            this.orderedProperty[index] = "sort descending"
            break;
          case "sort descending":
            this.orderedProperty = Array(this.headers.length).fill("sort")
            this.orderedProperty[index] = "sort ascending"
            break;
          default:
            this.orderedProperty = Array(this.headers.length).fill("sort")
            this.orderedProperty[index] = "sort descending"
            break;
        }
      },
      sorted(sortedFunction, index){
        this.updateIcon(index);
        this.currentColumnSorted = -1
        this.currentColumnSorted = index
      }
    },
    computed:{
      getCurrentData: function(){
        return this.updateCurrentData()
      },
      items(){
        return this.currentItems()
      },
      updateOrderedBy(){
        this.orderedBy = this.headers.map(header => header.sorted ? {key: header.key, fun:header.sorted} : '' )
      }
    }
  };
</script>
