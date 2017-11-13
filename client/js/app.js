$(document).ready(function(){

	var questions = [
		{
			question: "What month were you born in?"
			answers: ["Jan", "Feb", "Mar","April","May","Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
		},
		{
			question: "What would you prefer to eat?"
			answers: ["Every-flavor beans", "Chocolate Frog", "Butterbeer"]
		},
		{
			question: "What house would you be in if you were a Harry Potter character"
			answers: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
		},
		{
			question: "What class is your favorite?"
			answers: ["Potions", "Defense against the dark arts","Transfiguration","Divination"]
		}
	]

	$('#answer-form').on('submit', function(e){

		e.preventDefault();
		$('.patronus-div').empty();



	})	
}