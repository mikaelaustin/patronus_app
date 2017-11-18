$(document).ready(function(){

	$(document).on('submit', function(e){
		//clear out patronus stuff

		e.preventDefault();



		// $('#patronus-name').remove()
		// $('#patronus-character').remove()
		// $('#patronus-quality').remove()
		// $('#patronus-image').remove()
		
		var validGender = false;
		var nameInput = $('#name-input').val();
		var ageInput = $('#age-input').val();
		var genderInput = $("#gender-input input[type='radio']:checked").val();
		//console.log(genderInput);

		if(genderInput.toLowerCase() === "male" || genderInput.toLowerCase() === "female"){
			validGender = true
		}

		//var patronus = "dog"

		var obj = {
			"name": nameInput,
			"age": ageInput,
			"gender": genderInput
		}

		if(validGender){
			$.ajax({
				method: 'POST',
				url: '/patronus',
				contentType: 'application/json',
				dataType: 'json',
				data: JSON.stringify(obj)
			}).then(function(res){
				var patronus_obj = res[0];
				console.log('patronus_obj', patronus_obj)
				
				$('#patronus-name').text("Patronus name: "+patronus_obj.name);
				$('#patronus-character').text("Harry Potter Character with your patronus: "+patronus_obj.character)
				$('#patronus-quality').text("Qualities of this patronus: "+patronus_obj.qualities)
				$('#patronus-image').html('<img src='+patronus_obj.image+' height="200px" width="auto">')
				// characterP.text(patronus_obj.character);
				// qualitiesP.text(patronus_obj.qualities);
				// patronus_img.attr('src','../images/patronus_obj.image')
				// patronus_img.height(200)
				// patronus_img.width('auto')
				
			});	
		} else {
			alert("Please enter a valid gender")
				};
		});
	});		








	