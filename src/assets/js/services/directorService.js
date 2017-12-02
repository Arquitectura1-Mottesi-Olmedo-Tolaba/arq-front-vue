import Vue from 'vue';

var json = [
  {id: 1, name: "Tecnicatura Universitaria en Programación Informática"},
  {id: 2, name: "Licenciatura en Informatica"}
];

var jsonResponse = {body: json};
var offersJson = [
  {
    id: 1,
    name: "Matemática",
    info: [
      {name: 'comision 1', capacity: 30, amount: 12},
      {name: 'comision 2', capacity: 30, amount: 34},
      {name: "la quisiera cursar...", amount: 67}
    ]
  },
  {
    id: 2,
    name: "Introducción a la Programación",
    info: [
      {name: 'comision 1', capacity: 20, amount: 12},
      {name: "la quisiera cursar...", amount: 67}
    ]
  },
  {
    id: 3,
    name: "Organización de Computadoras",
    info: [
      {name: 'comision 1', capacity: 30, amount: 12},
      {name: "la quisiera cursar...", amount: 67}
    ]
  }
]
var academicOffer = {
  offers: offersJson,
  day: "27/4/2017",
  name: "Tecnicatura Universitaria en Programación Informática",
  studentInformation: {
    total: 1000,
    completed: 400
  }
}

var currentAcademicOfferJsonResponse = {body: academicOffer}

var directorService = {
  fetchDegrees: function(){
    return Promise.resolve(jsonResponse);
  },
  fetchCurrentAcademicOffer: function(){
    return Promise.resolve(currentAcademicOfferJsonResponse);
  }

}

export default directorService
