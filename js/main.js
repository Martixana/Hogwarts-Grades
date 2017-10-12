
//Create variables for student message
var greeting = "Hi"
var name = #student_Name
var message = ". Your final grade is an "+ #final_Grade"
var explanation = "Your grade breaks down in the following way: "


//create variables to hold final grade and grade breakdown
var total_grade = grade_calulation()
var total_grammar = 
var total_bibliography = 
var total_clarity = 
var total_originality = 

 //Calculating grades
function grade_calulation (a,b,c,d){
	var num_grade = #elGrammar + #elBiblio +#elClarity + #elOriginality

	if (num_grade >=90){
		document.write ('A')
	} else if ( num_grade >= 70){
		document.write ('B')
	} else if (num_grade >=60){
		document.write ('C')
	} else if (num_grade >= 50){
		document.write ('D')
	} else (num_grade <50){
		document.write ('F')
	}

	grade_calulation()
}

var elName = document.getElementById ('student_Name').value

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

var final_Grade = document.getElementById (final_grade)
final_Grade.textContent = grade_calulation()



