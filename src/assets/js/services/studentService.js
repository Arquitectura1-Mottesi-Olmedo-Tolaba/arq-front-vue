import Vue from 'vue';

var json = {
    id: 1,
     name: "Tecnicatura Universitaria en Programación Informática",
     period: {id: 1, "year": 2017, "quarter": 1},
     student: {
       id: 1,
       name: "Homero Simpson",
       approvedSubjects: [
         {id: 1, name: "Matemática"}
       ]
     },
    offers: [
      {
        id: 1,
         subject: {id: 1, name: "Matemática"},
        courses: [
          {
            id: 1,
            name: "comision 1",
            professor: {id: 1, name: "p1"},
            timelines: [
              {id: 1, day: "Lunes", start: "18:00", end: "21:00"},
              {id: 2, day: "Miercoles", start: "18:00", end: "21:00"}
            ]
          },
           {
            id: 4,
            name: "comision 2",
            professor: {id: 1, name: "p1"},
            timelines: [
              {id: 7, day: "Martes", start: "18:00", end: "21:00"},
              {id: 8, day: "Jueves", start: "18:00", end: "21:00"}
            ]
          }
         ],
        selectedOption:
          {
            id: "todavia no la voy a cursar",
            description:"todavia no la voy a cursar"
          },
        options: [
          {
            id: "ya la curse",
            description:"ya la curse"
          },
          {
            id: "todavia no la voy a cursar",
            description:"todavia no la voy a cursar"
          },
          {
            id: "la quisiera cursar pero los horarios no me convencen",
            description:"la quisiera cursar pero los horarios no me convencen"
          },
          {
            id: "1",
            description:"comision 1"
          },
          {
            id: "4",
            description:"comision 2"
          }
        ]
       },
      {
        id: 2,
         subject: {id: 2, name: "Introducción a la Programación"},
         courses: [
           {
            id: 3,
            name: "comision 1",
             professor: {id: 2, name: "p2"},
            timelines: [
               {id: 3, day: "Martes", start: "18:00", end: "21:00"},
               {id: 4, day: "Jueves", start: "18:00", end: "21:00"}
             ]
           }
         ],
        selectedOption:
          {
            id: "todavia no la voy a cursar",
            description:"todavia no la voy a cursar"
          },
        options: [
          {
            id: "ya la curse",
            description:"ya la curse"
          },
          {
            id: "todavia no la voy a cursar",
            description:"todavia no la voy a cursar"
          },
          {
            id: "la quisiera cursar pero los horarios no me convencen",
            description:"la quisiera cursar pero los horarios no me convencen"
          },
          {
            id: "3",
            description:"comision 1"
          }
        ]
       },
      {
          id: 3,
          subject: {id: 3, name: "Organización de Computadoras"},
           courses: [
             {
              id: 5,
              name: "comision 1",
               professor: {id: 3, name: "p3"},
               timelines: [
                {id: 5, day: "Viernes", start: "16:00", end: "22:00"}
              ]
             }
           ],
          selectedOption:
            {
              id: "todavia no la voy a cursar",
              description:"todavia no la voy a cursar"
            },
          options: [
            {
              id: "ya la curse",
              description:"ya la curse"
            },
            {
              id: "todavia no la voy a cursar",
              description:"todavia no la voy a cursar"
            },
            {
              id: "la quisiera cursar pero los horarios no me convencen",
              description:"la quisiera cursar pero los horarios no me convencen"
            },
            {
              id: "5",
              description:"comision 1"
            }
          ]
      }
     ]
  };
var jsonResponse = {body: json};

var studentService = {
  existCode: function(code){
    return code === '12345' ? Promise.resolve() : Promise.reject(false);
  },
  fetchAcademicOffer: function(academicOfferCode){
    return Vue.http.get( this.getUrl() + '/services/surveys/getByCode/' + academicOfferCode);
  },
  sendOffer: function(code, surveyMatches, message){
    var response = {
      'code': code,
      'surveyMatches': surveyMatches,
      'message': message
    };
    return Vue.http.post( this.getUrl() + '/services/surveys/save', response)
      .then(asd => console.log('pepe')
      , asd => console.log('pepeasdasdjaklsdjlaksjdjlkasjdlkjas')
    );
  },
  getUrl: function(){
    return process.env.API || "http://localhost:3000"
  }
}

export default studentService
