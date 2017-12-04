var fs = require('fs');
var path = require('path');


var SubjectsTpiFile = 'src/assets/storage/subjectsTPI.json';
var academicOfferInformationTPI = 'src/assets/storage/academicOfferInformationTPI.json'

var subjectsTpi = JSON.parse(fs.readFileSync(SubjectsTpiFile));

var totalStudent = 1000
var completedStudent = 400

function createAcademicOfferInformation(){
  return {
    offers: createOffers(),
    day: "27/4/2017",
    name: "Tecnicatura Universitaria en Programación Informática",
    studentInformation: {
      total: totalStudent,
      completed: completedStudent
    }
  }
}

function createOffers(){
  return subjectsTpi.map(subject => createOffer(subject))
}

function createOffer(subject){
  return {
    id: subject.id,
    name: subject.name,
    info: createInformation()
  }
}

function createInformation(){
  var array = createComitions()
  array.push({name: "la quisiera cursar...", amount: genRandom(completedStudent)})
  return array
}

function createComitions(){
  return Array(genRandom(2) + 1).fill(1).map( (n, index) => {
    var comisionName = 'Comision ' + (index + 1)
    var currentCapacity = genRandom(100)
    var currentAmount = genRandom(100)
    return {
      name: comisionName,
      capacity: currentCapacity,
      amount: currentAmount
    }
  })
}

function genRandom(number){
  return Math.floor(Math.random() * number)
}

writeFile(academicOfferInformationTPI, createAcademicOfferInformation());

///// Utils /////
function writeFile(file, data){
  fs.writeFile(file, JSON.stringify(data, null, 4), function(err) {
      if (err) {
          console.error(err);
          process.exit(1);
      }
  });
}
