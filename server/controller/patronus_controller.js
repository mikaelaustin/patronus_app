//requiring the data in the object i made
var object = require('../models/object.js');

module.exports = {
	choose_patronus: function (data) {
		var name = data.name
		var age = data.age
		var gender = data.gender
		var patronus = ""
		


		if(name && age > 5 && age < 100){
					//if name starts with a-g and age is 5-20 and male
			if(name.charAt(0).match(/[a-gA-G]/) && age>5 && age<20 && gender === 'male'){
					object[i].name = "Doe"
					return object[i]
					return object.dog
				}
					//if name starts with a-g and age is 5-20 and female
			else if (name.charAt(0).match(/[a-gA-G]/) && age>5 && age<=20 && gender === 'female'){
					object[i].name = "Dog"
					return object.dog
				}
					//if name starts with h-p and age 21-30 and male
			else if (name.charAt(0).match(/[h-pH-P]/) && age>=21 && age<=30 && gender === 'male'){
					object[i].name = "Stag"
					return object.stag
				}
					//if name starts with h-p and age 21-30 and female
			else if (name.charAt(0).match(/[h-pH-P]/) && age>=21 && age<=30 && gender === 'female'){
					object[i].name = "Horse"
					return object.horse
				}
					//if name starts with q-z and age 31-40 and male
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=31 && age<=40 && gender === 'male'){
					object[i].name = "Hare"
					return object.hare
				}
					//if name starts with q-z and age 31-40 and female
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=31 && age<=40 && gender === 'female'){
					object[i].name = "Wolf"
					return object.wolf
				}
					//if name starts with a-m and age 41-60 and male
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=41 && age<=60 && gender === 'male'){
					object[i].name = "Otter"
					return object.otter
				}
					//if name starts with a-m and age 41-60 and female
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=41 && age<=60 && gender === 'female'){
					object[i].name = "Phoenix"
					return object.phoenix
					}
					//if name starts with n-z and age 61-99 and male
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=61 && age<=99 && gender === 'male'){
					object[i].name = "Cat"
					return object.cat
					}
					//if name starts with n-z and age 61-99 and female
			else if (name.charAt(0).match(/[q-zQ-Z]/) && age>=61 && age<=99 && gender === 'female'){
					object[i].name = "Lynx"
					return object.lynx
					}
			} else {
			console.log("please enter valid information")
				}
			
	}
}