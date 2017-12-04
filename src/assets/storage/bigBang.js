var fs = require('fs');
var path = require('path');


var SubjectLicBioFile = 'src/assets/storage/subjectLicBio.json';
var SubjectsTpiFile = 'src/assets/storage/subjectsTPI.json';
var ProfessorsFile = 'src/assets/storage/professors.json';
var TimelineFile = 'src/assets/storage/timeline.json';
var OptionsFile = 'src/assets/storage/options.json';
var degreeTPIFile = 'src/assets/storage/degreeTPI.json'

var subjectsTpi = JSON.parse(fs.readFileSync(SubjectsTpiFile));
var subjectsLicBio = JSON.parse(fs.readFileSync(SubjectLicBioFile));
var professors = JSON.parse(fs.readFileSync(ProfessorsFile));
var timelineVar = JSON.parse(fs.readFileSync(TimelineFile));
var optionsVar = JSON.parse(fs.readFileSync(OptionsFile));



function createDegree(degreeName, subjectsList, professorsList, period){
  return {
    name: degreeName,
    subjects: subjectsList,
    professors: professorsList,
    academicOffer: [createAcademicOffer(subjectsList, professorsList, period)]
  }
}

function createAcademicOffer(subjectsList, professorsList, currentPeriod){
  return {
    offers: createOffers(subjectsList, professorsList),
    period: currentPeriod
  }
}

function createOffers(subjectsList, professorsList) {
    return subjectsList.map(subject => createOffer(subject, professorsList));
}

function createOffer(currentSubject, professorsList) {
  return {
    subject: currentSubject,
    courses: createCourses(professorsList),
    options: optionsVar
  }
}

function createCourses(professorsList){
  return {
    id: 1,
    professor: professorsList[Math.floor(Math.random()*professorsList.length)],
    name: "Comision 1",
    timeline: timelineVar[Math.floor(Math.random()*timelineVar.length)]
  }
}

writeFile(degreeTPIFile, createDegree("Tecnicatura Universitaria en Programacion Informatica ", subjectsTpi, professors, {year: 2017, quarter: 1}));

///// Utils /////
function writeFile(file, data){
  fs.writeFile(degreeTPIFile, JSON.stringify(data, null, 4), function(err) {
      if (err) {
          console.error(err);
          process.exit(1);
      }
  });
}
