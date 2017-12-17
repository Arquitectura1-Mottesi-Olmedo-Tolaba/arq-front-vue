import Vue from 'vue';

var studentService = {
  existCode: function(code, successCallback, errorCallback){
    return Vue.http.get( `${this.getUrl()}/services/students/verify/${code}`)
      .then(successCallback, errorCallback)
  },
  fetchAcademicOffer: function(academicOfferCode){
    return Vue.http.get(`${this.getUrl()}/services/students/getSurveyByCode/${academicOfferCode}`);
  },
  sendOffer: function(code, surveyMatches, message){
    var response = {
      'code': code,
      'surveyMatches': surveyMatches,
      'message': message
    };
    return Vue.http.post(`${this.getUrl()}/services/students/save`, response)
      .then(asd => console.log('pepe')
      , asd => console.log('pepeasdasdjaklsdjlaksjdjlkasjdlkjas')
    );
  },
  getUrl: function(){
    return process.env.API || "http://localhost:3000/arqsoft-mottesi_olmedo_tolaba"
  }
}

export default studentService
