$(document).ready(function(){

	var formDiv = $('#answer-form')
	$(document).on('submit', function(e){
		e.preventDefault();
		console.log("hiya!")
		var nameInput = $('#name-input').val();
		var ageInput = $('#age-input').val();
		var genderInput = $("#gender-input input[type='radio']:checked").val();
		console.log(genderInput);


		if(genderInput.toLowerCase() === "male" || genderInput.toLowerCase() === "female"){
			validGender = true
		}

		var patronus = "dog"

		var obj = {
			"name": nameInput,
			"age": ageInput,
			"gender": genderInput
			}

//		function matchPatronusFunction(nameInput, ageInput, genderInput){

//		}	

		$.ajax({
			method: 'POST',
			url: '/patronus',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(obj)
			
		}) .then(function(res){
			console.log(res)
			for (var i=0; i<res.length; i++){
				var patronusDiv = $('<div>')
				patronusDiv.append(res[i].body);
				$('#patronus-answer').append(patronusDiv)
			}
			// patronus = res.patronus;
			// //getting photo and appending it to the div?? i hope?
			// var patronus = ""
			// var patronusDiv = $('<div>')
			// var img = $('<img id="patronus-image">');
			// img.attr('src', './images/' + patronus + ".jpg");
			// 	img.attr('data-patronus-name', patronus)
			// 	img.height(200)
			// 	img.width('auto')
			// 	patronusDiv.append(img)
			// 	$('#patronus-answer').append(patronusDiv);

	});
	});
});



//to do: finsih setting up post so that user input is taken in
//get it from the server
//match it with patronus and send the proper patronus info and photo into site
//fml fml fml fml








	