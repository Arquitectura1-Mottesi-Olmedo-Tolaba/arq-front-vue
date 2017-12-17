import Vue from 'vue';

var directorService = {
  fetchDegrees() {
    var directorID = Vue.cookie.get('director')
    return Vue.http.get(`${this.getUrl()}/services/directors/degreesFor/${directorID}`);
  },
  fetchCurrentAcademicOffer(degreeID) {
    return Vue.http.get(`${this.getUrl()}/services/information/academicOfferInformation/${degreeID}`);
  },
  logout() {
    Vue.cookie.delete('director')
  },
  getUrl() {
    return process.env.API || "http://localhost:3000/arqsoft-mottesi_olmedo_tolaba"
  }

}

export default directorService
