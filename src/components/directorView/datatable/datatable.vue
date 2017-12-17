<template lang="html">
  <div>
    <sui-grid>
      <sui-grid-row >
        <sui-grid-column :width="10">
          <h2>{{title}}</h2>
        </sui-grid-column>
        <sui-grid-column :width="6">
          <sui-input v-if="searchFunction" v-model="message" placeholder="busqueda" icon="search" />
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <sui-table celled>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell v-for="header in currentHeader">
            <span :data-tooltip="header.tooltip">{{header.title}}</span>
            <a v-on:click="sorted(header)" v-if="header.sorted"><sui-icon :name="header.icon" /></a>
          </sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <template v-for="data in getCurrentData">
          <sui-table-row :class="{negative: negativeRowStyle(data)}">
            <sui-table-cell v-for="header in currentHeader">{{data[header.key]}}</sui-table-cell>
          </sui-table-row>
        </template>
      </sui-table-body>
      <sui-table-footer v-if="amountInPage">
        <sui-table-row>
          <sui-table-header-cell :colspan="currentHeader.length">
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
        message: '',
        currentPage: 0,
        currentHeader: [],
        length: 0,
        sortedBy: {}
      }
    },
    created(){
      this.orderedProperty = Array(this.headers.length).fill("sort");
      this.length = this.tableData.length;
      this.currentHeader = this.createHeader()
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
        return this.sortedBy ? this.applySorted(currentTableData) : currentTableData
      },
      applySorted(currentTableData){
        switch (this.sortedBy.icon) {
          case "sort ascending":
            return currentTableData.sort((a,b) => this.sortedBy.sorted(this.sortedBy.key, b, a))
          case "sort descending":
            return currentTableData.sort((a,b) => this.sortedBy.sorted(this.sortedBy.key, a, b))
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
      updateIcon(header){
        switch (header.icon) {
          case "sort ascending":
            this.refreshAllIcons()
            header.icon = "sort descending"
            break;
          case "sort descending":
            this.refreshAllIcons()
            header.icon = "sort ascending"
            break;
          default:
            this.refreshAllIcons()
            header.icon = "sort descending"
            break;
        }
      },
      refreshAllIcons(){
        this.currentHeader.forEach(header => header.icon = "sort");
      },
      sorted(header){
        this.updateIcon(header);
        this.sortedBy = header
      },
      createHeader(){
        return this.headers.map(header => {
          return {
            'key': header.key,
            'sorted': header.sorted,
            'title': header.title,
            'tooltip': header.tooltip,
            'icon': 'sort'
          }
        });
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
