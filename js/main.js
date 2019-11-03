//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  'name' : 'Mattia',
  'surname' : 'Vena',
  'age' : '26'
};

//Stampare a schermo attraverso il for in tutte le proprietà.
for (var property in student) {
  console.log(property, ': ',student[property]);
}
//Creare un array di oggetti di studenti.
// creo altri studenti
var student2 = {
  'name' : 'Marco',
  'surname' : 'Trinca',
  'age' : '28'
};

var student3 = {
  'name' : 'Federico',
  'surname' : 'Egidi',
  'age' : '25'
};

var student4 = {
  'name' : 'Francesco',
  'surname' : 'Totti',
  'age' : '22'
};

// li metto nell'array
var arrayStudent = [student, student2, student3, student4];


//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < arrayStudent.length; i++) {
  console.log(arrayStudent[i].name, arrayStudent[i].surname);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// chiedo nome, cognome e età per inserire nuovo studente
var newName = prompt('Inserisci il tuo nome');
var newSurname = prompt('Inserisci il tuo cognome');
var newAge = prompt('Inserisci la tua età');

// creo un nuovo studente con dati inseriti dall'utente
var student4 = {
  'name' : newName,
  'surname' : newSurname,
  'age' : newAge
};

// aggiungo nuovo studente nell' arrayStudent
arrayStudent.push(student4);
console.log(arrayStudent);
