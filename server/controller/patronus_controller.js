module.exports = (data) => {
	var name = data.name
	var age = data.age
	var gender = data.gender

	if(name && age > 5 && age < 100){
				//if name starts with a-g and age is 5-20 and male
		if(name.charAt(0).match(/[a-mA-m]/) && age>5 && age<30 && gender === 'male'){
			return "Doe";
		} else if (name.charAt(0).match(/[a-mA-m]/) && age>5 && age<=35 && gender === 'female'){
			//if name starts with a-g and age is 5-20 and female
			return "Dog";
		} else if (name.charAt(0).match(/[a-mA-m]/) && age>=5 && age<=35 && gender === 'male'){
			//if name starts with h-p and age 21-30 and male		
			return "Stag";
		} else if (name.charAt(0).match(/[a-mA-m]/) && age>=36 && age<=70 && gender === 'female'){
			//if name starts with h-p and age 21-30 and female
			return "Horse";
		} else if (name.charAt(0).match(/[a-mA-m]/) && age>=36 && age<=70 && gender === 'male'){
			//if name starts with q-z and age 31-40 and male
			return "Hare";
		} else if (name.charAt(0).match(/[n-zN-Z]/) && age>=5 && age<=35 && gender === 'female'){
			//if name starts with q-z and age 31-40 and female
			return "Wolf";
		} else if (name.charAt(0).match(/[n-zN-Z]/) && age>=5 && age<=35 && gender === 'male'){
			//if name starts with a-m and age 41-60 and male
			return "Otter";
		} else if (name.charAt(0).match(/[n-zN-Z]/) && age>=36 && age<=70 && gender === 'female'){
			//if name starts with a-m and age 41-60 and female
			return "Phoenix";
		} else if (name.charAt(0).match(/[n-zN-Z]/) && age>=36 && age<=70 && gender === 'male'){
			//if name starts with n-z and age 61-99 and male
			return "Cat";
		} else  {
			//anything not mentioned
			return "Lynx";
		}
	} else {
		return "please enter valid information";
	}
}