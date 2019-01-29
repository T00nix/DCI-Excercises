function removecolor() {
  var x = document.getElementById("colorSelect");
  x.remove(x.selectedIndex);
}






/************************************************************
 *
 * Create a function that extends the students` objects with the
 * calculated grade, based on their points. You can see the
 * expected result below, as written in "expectedGrades".
 *
 * Grades, based on points:
 * A    90 - 100
 * B    70 -  89
 * C    50 -  69
 * D    30 -  49
 * E    10 -  29
 * F     0 -   9
 */

const students = [
  {
    name: "Peter",
    points: 35
  },
  {
    name: "Paul",
    points: 100
  },
  {
    name: "John",
    points: 45
  },
  {
    name: "Mary",
    points: 84
  },
  {
    name: "Jane",
    points: 15
  },
  {
    name: "Jennifer",
    points: 92
  },
  {
    name: "Martin",
    points: 9
  }
];
/*

function grade() {
  if (points < 10) {
    return "F";
  }
  else if (points < 30) {
    return "E";
  }
  else if (points < 50) {
    return "D";
  }
  else if (points < 70) {
    return "C";
  }
  else if (points < 90) {
    return "B";
  }
  else {
    return "A";
  }
}

function addGradesForStudents(students){
  return students.map(student => {
    student.grade = grade(student.points);
    return student;
  })
}
addGradesForStudents()

console.log("Grade:");
console.log(addGradesForStudents(students));*/

/**********************************************************
Fill the class (check at the end for expected output)
*/

class registerUser {

  constructor(name,password) {
  this.name = name;
  this.pass = password;
}

get name() {
   return this.name2
  }
	
	get pass() {
	return this.pass2;
  }

  set name(value) {
	return this.name2 = value;
  }
	
  set pass(value) {
	return this.pass2 = value;
  }
	
	showInfo(){
	return `${this.name} ${this.pass}`;
  }
}

let user = new registerUser("Paul","123password456")

console.log(user.showInfo())


//Update the user
user.name="Leandro";

//Update the pass
user.pass="newSecret";

//Show user data
console.log(user.showInfo());

//Update the user
user.name="xXOverlordXx";

//Update the pass
user.pass="ultraSecretPassword"

//Show user data
console.log(user.showInfo())