import Vue from 'vue';

export default class LoginService{

  login(director, successCallback, errorCallback){
    return Vue.http.post(`${this.getUrl()}/services/directors/login`, director).then( response => {
      this.setCookie(response)
      successCallback(response)
    }, errorCallback)
  }

  getUrl(){
    return process.env.API || "http://localhost:3000/arqsoft-mottesi_olmedo_tolaba"
  }

  setCookie(response){
    Vue.cookie.set('director', response.body)
  }

}
