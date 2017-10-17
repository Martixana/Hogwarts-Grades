//Retrieving student name from input
 name = document.getElementById("student_Name").value

//On click, do this
 function getStudentName(){
 	document.getElementById("formOne").reset();
 /*	var replaceStudentName = document.getElementsByClassName('studentName');
 	replaceStudentName.textContent = name.value + " 's";
*/
 	/*var clearInput = document.getElementById(student_Name) //clear input after student name replacement below
 	clearInput.reset();*/
 	
     
 }

      getStudentName();



//create variables to hold values from html tags with same id
var elGrammar = document.getElementById ('elGrammar')
var elBibliography = document.getElementById ('elBiblio')
var elClarity = document.getElementById ('elClarity')
var elOriginality = document.getElementById ('elOriginality')


 //Calculating grades
function grade_calulation (a,b,c,d,e){
	var num_grade = elGrammar + elBibliography + elClarity + elOriginality

	if (num_grade >=90){
		document.write ('A');
	} else if ( num_grade >= 70){
		document.write ('B');
	} else if (num_grade >=60){
		document.write ('C');
	} else if (num_grade>= 50){
		document.write ('D');
	} else if(num_grade<50){
		document.write ('F');
	} else if (num_grade >100 || num_grade<0){
		document.write ('Please recalculate your answers above.')
	}
    
    return

}
    grade_calulation();


 var letter_grade = grade_calulation()


 


//Create variables for student message
/*var greeting = "Hi"
var name = document.getElementsByClassName('studentName')
name.textContent = document.getElementById('student_Name')+ " 's"
var message = ". Your final grade is an " + grade_calculation()
var explanation = "Your grade breaks down in the following way: "
*/
/*var elName = document.getElementById ('student_Name').value

var elTwo = docuement.getElementById ('elGrammar').value
elTwo.textContent = elName

var elGrammar = document.getElementById ('elGrammar').value

var elThree = document.getElementById ('elBiblio').value
elThree.textContent = elName

var elBiblio = document.getElementById ('elBiblio').value

var elFour = document.getElementById ('elClarity').value
elFour.textContent = elName

var elClarity = document.getElementById ('elClarity').value

var elFive = document.getElementById ('elOriginality').value
elFive.textContent = elName

var elOriginality = document.getElementById ('elOriginality').value

var elSix = document.getElementById ('elSix')
elSix.textContent = elOne

var letter_Grade = document.getElementById (letter_Grade)
letter_Grade.textContent = grade_calulation()*/



