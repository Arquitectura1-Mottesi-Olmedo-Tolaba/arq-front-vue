import Vue from 'vue';

var json = [
  {id: 1, name: "Tecnicatura Universitaria en Programación Informática"},
  {id: 2, name: "Licenciatura en Informatica"}
];

var jsonResponse = {body: json};
var currentAccademicOfferJson = [
  {
    id: 1,
    name: "Matemática",
    info: [
      {name: 'comision 1', capacity: 30, amount: 12},
      {name: 'comision 2', capacity: 30, amount: 34},
      {name: "todavia no la voy a cursar", amount: 100},
      {name: "la quisiera cursar pero los horarios no me convencen", amount: 67}
    ]
  },
  {
    id: 2,
    name: "Introducción a la Programación",
    info: [
      {name: 'comision 1', capacity: 20, amount: 12},
      {name: "todavia no la voy a cursar", amount: 100},
      {name: "la quisiera cursar pero los horarios no me convencen", amount: 67}
    ]
  },
  {
    id: 3,
    name: "Organización de Computadoras",
    info: [
      {name: 'comision 1', capacity: 30, amount: 12},
      {name: "todavia no la voy a cursar", amount: 100},
      {name: "la quisiera cursar pero los horarios no me convencen", amount: 67}
    ]
  }
]

var currentAccademicOfferJsonResponse = {body: currentAccademicOfferJson}

var directorService = {
  fetchDegrees: function(){
    return Promise.resolve(jsonResponse);
  },
  fetchCurrentAccademicOffer: function(){
    return Promise.resolve(currentAccademicOfferJsonResponse);
  }

}

export default directorService
