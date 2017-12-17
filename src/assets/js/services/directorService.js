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
var academicOfferFile = {
    "offers": [
        {
            "id": 1,
            "name": "Lectura y escritura académica",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 13,
                    "amount": 60
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 23
                }
            ]
        },
        {
            "id": 2,
            "name": "Matemática",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 8,
                    "amount": 11
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 372
                }
            ]
        },
        {
            "id": 3,
            "name": "Elementos de programación y lógica",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 91,
                    "amount": 55
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 274
                }
            ]
        },
        {
            "id": 4,
            "name": "Introducción a la Programación",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 70,
                    "amount": 54
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 368
                }
            ]
        },
        {
            "id": 5,
            "name": "Organización de Computadoras",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 68,
                    "amount": 22
                },
                {
                    "name": "Comision 2",
                    "capacity": 91,
                    "amount": 39
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 187
                }
            ]
        },
        {
            "id": 6,
            "name": "Matemática I",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 93,
                    "amount": 55
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 137
                }
            ]
        },
        {
            "id": 7,
            "name": "Programación con Objetos I",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 28,
                    "amount": 10
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 376
                }
            ]
        },
        {
            "id": 8,
            "name": "Bases de Datos",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 43,
                    "amount": 14
                },
                {
                    "name": "Comision 2",
                    "capacity": 66,
                    "amount": 8
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 259
                }
            ]
        },
        {
            "id": 9,
            "name": "Estructuras de Datos",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 6,
                    "amount": 39
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 147
                }
            ]
        },
        {
            "id": 10,
            "name": "Programación con Objetos II",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 5,
                    "amount": 37
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 361
                }
            ]
        },
        {
            "id": 11,
            "name": "Redes de Computadoras",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 28,
                    "amount": 63
                },
                {
                    "name": "Comision 2",
                    "capacity": 87,
                    "amount": 30
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 48
                }
            ]
        },
        {
            "id": 12,
            "name": "Sistemas Operativos",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 95,
                    "amount": 62
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 40
                }
            ]
        },
        {
            "id": 13,
            "name": "Programación Concurrente",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 18,
                    "amount": 40
                },
                {
                    "name": "Comision 2",
                    "capacity": 71,
                    "amount": 68
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 290
                }
            ]
        },
        {
            "id": 14,
            "name": "Matemática II",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 63,
                    "amount": 52
                },
                {
                    "name": "Comision 2",
                    "capacity": 50,
                    "amount": 26
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 257
                }
            ]
        },
        {
            "id": 15,
            "name": "Elementos de Ingeniería de Software",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 40,
                    "amount": 26
                },
                {
                    "name": "Comision 2",
                    "capacity": 54,
                    "amount": 68
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 132
                }
            ]
        },
        {
            "id": 16,
            "name": "Construcción de Interfaces de Usuario",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 11,
                    "amount": 69
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 244
                }
            ]
        },
        {
            "id": 17,
            "name": "Estrategias de Persistencia",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 46,
                    "amount": 14
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 263
                }
            ]
        },
        {
            "id": 18,
            "name": "Programación Funcional",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 87,
                    "amount": 89
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 376
                }
            ]
        },
        {
            "id": 19,
            "name": "Desarrollo de Aplicaciones",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 63,
                    "amount": 99
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 215
                }
            ]
        },
        {
            "id": 20,
            "name": "Laboratorio de Sistemas Operativos y Redes",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 88,
                    "amount": 30
                },
                {
                    "name": "Comision 2",
                    "capacity": 93,
                    "amount": 47
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 63
                }
            ]
        },
        {
            "id": 21,
            "name": "Seguridad Informática",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 49,
                    "amount": 63
                },
                {
                    "name": "Comision 2",
                    "capacity": 67,
                    "amount": 25
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 167
                }
            ]
        },
        {
            "id": 22,
            "name": "Bases de Datos II",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 13,
                    "amount": 52
                },
                {
                    "name": "Comision 2",
                    "capacity": 14,
                    "amount": 61
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 54
                }
            ]
        },
        {
            "id": 23,
            "name": "Participación y Gestión en Proyectos de Software Libre",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 14,
                    "amount": 24
                },
                {
                    "name": "Comision 2",
                    "capacity": 60,
                    "amount": 54
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 162
                }
            ]
        },
        {
            "id": 24,
            "name": "Introducción a las Arquitecturas de Software",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 64,
                    "amount": 37
                },
                {
                    "name": "Comision 2",
                    "capacity": 54,
                    "amount": 51
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 95
                }
            ]
        },
        {
            "id": 25,
            "name": "Programación con Objetos III",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 15,
                    "amount": 2
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 133
                }
            ]
        },
        {
            "id": 26,
            "name": "Introducción a la Bioinformática",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 87,
                    "amount": 23
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 65
                }
            ]
        },
        {
            "id": 27,
            "name": "Políticas Públicas en la Sociedad de la Información y la Era Digital",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 5,
                    "amount": 44
                },
                {
                    "name": "Comision 2",
                    "capacity": 23,
                    "amount": 42
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 393
                }
            ]
        },
        {
            "id": 28,
            "name": "Sistemas de Información Geográfica",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 8,
                    "amount": 20
                },
                {
                    "name": "Comision 2",
                    "capacity": 96,
                    "amount": 66
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 269
                }
            ]
        },
        {
            "id": 29,
            "name": "Herramientas Declarativas en Programación",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 96,
                    "amount": 82
                },
                {
                    "name": "Comision 2",
                    "capacity": 20,
                    "amount": 29
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 342
                }
            ]
        },
        {
            "id": 30,
            "name": "Introducción al Desarrollo de Videojuegos",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 16,
                    "amount": 56
                },
                {
                    "name": "Comision 2",
                    "capacity": 39,
                    "amount": 26
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 51
                }
            ]
        },
        {
            "id": 31,
            "name": "Derechos de Autor y Derechos de Copia en la Era Digital",
            "info": [
                {
                    "name": "Comision 1",
                    "capacity": 6,
                    "amount": 11
                },
                {
                    "name": "la quisiera cursar...",
                    "amount": 388
                }
            ]
        }
    ],
    "day": "27/4/2017",
    "name": "Tecnicatura Universitaria en Programación Informática",
    "studentInformation": {
        "total": 1000,
        "completed": 400
    }
}
var currentAcademicOfferJsonResponse = {body: academicOfferFile}

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
