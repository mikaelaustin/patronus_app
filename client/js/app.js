$(document).ready(function(){

	var formDiv = $('#answer-form')
	$(document).on('submit', function(e){
		e.preventDefault();

		var nameInput = $('#name-input').val();
		var ageInput = $('#age-input').val();
		var genderInput = $('#gender-input').val();


		if(gender.toLowerCase() === "male" || gender.toLowerCase() === "female"){
			validGender = true

		var patronus

		if(nameInput && ageInput > 5 && ageInput < 100 && validGender){
			//if name starts with a-g and age is 5-20 and male
			if(nameInput.charAt(0).match(/[a-gA-G]/) && ageInput>5 && ageInput<20 && genderInput === 'male'){
				patronus = "doe"
			}
			//if name starts with a-g and age is 5-20 and female
			else if (nameInput.charAt(0).match(/[a-gA-G]/) && ageInput>5 && ageInput<=20 && genderInput === 'female'){
				patronus = "dog"
			}
			//if name starts with h-p and age 21-30 and male
			else if (nameInput.charAt(0).match(/[h-pH-P]/) && ageInput>=21 && ageInput<=30 && genderInput === 'male'){
				patronus = "stag"
			}
			//if name starts with h-p and age 21-30 and female
			else if (nameInput.charAt(0).match(/[h-pH-P]/) && ageInput>=21 && ageInput<=30 && genderInput === 'female'){
				patronus = "horse"
			}
			//if name starts with q-z and age 31-40 and male
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=31 && ageInput<=40 && genderInput === 'male'){
				patronus = "hare"
			}
			//if name starts with q-z and age 31-40 and female
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=31 && ageInput<=40 && genderInput === 'female'){
				patronus = "wolf"
			}
			//if name starts with a-m and age 41-60 and male
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=41 && ageInput<=60 && genderInput === 'male'){
				patronus = "otter"
			}
			//if name starts with a-m and age 41-60 and female
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=41 && ageInput<=60 && genderInput === 'female'){
				patronus = "phoenix"
			}
			//if name starts with n-z and age 61-99 and male
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=61 && ageInput<=99 && genderInput === 'male'){
				patronus = "cat"
			}
			//if name starts with n-z and age 61-99 and female
			else if (nameInput.charAt(0).match(/[q-zQ-Z]/) && ageInput>=61 && ageInput<=99 && genderInput === 'female'){
				patronus = "lynx"
			}
		}	
	} else {
		console.log("please enter valid information")
	}

		$.ajax({
			method: 'POST',
			url: '/patronus-post',
			contentType: 'application/json',
			dataType: 'json'
			
		}) .then function(res){
			for (var i = 0; i<res.length; i++){
				if (res[i].patronus === patronus )//im very lost here i don't know what comes next or if this is correct
			}
		}







	var patronusDiv = $('<div>')
	var img = $('<img id="patronus-image">');
	img.attr('src', './images/' + patronus + ".jpg");
		img.attr('data-patronus-name', patronus)
		img.height(200)
		img.width('auto')
		patronusDiv.append(img)
		$('#patronus-answer').append(patronusDiv);



}

	// var questions = [
	// 	{
	// 		question: "What month were you born in?"
	// 		answers: ["Jan", "Feb", "Mar","April","May","Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
	// 	},
	// 	{
	// 		question: "What would you prefer to eat?"
	// 		answers: ["Every-flavor beans", "Chocolate Frog", "Butterbeer"]
	// 	},
	// 	{
	// 		question: "What house would you be in if you were a Harry Potter character"
	// 		answers: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
	// 	},
	// 	{
	// 		question: "What class is your favorite?"
	// 		answers: ["Potions", "Defense against the dark arts","Transfiguration","Divination"]
	// 	}
	// ]
