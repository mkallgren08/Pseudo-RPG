$(document).ready(function(){
	
	// The Good Guys

	var harryDresden = {
		name: "Harry Dresden",
		height: "6' 7''",
		occupation: "PI. Wizard. Former host to the 'imprint' of a  Fallen Angel's spirit who sacrificed herself in an act of love. Current Winter Knight, mortal champion of the Winter court of Faeries.",
		hp: "70",
		damage: "17 -> 47",
		attkDam: 12 + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + 5 
	}

	var karrinMurphy = {
		name: "Karrin Murphy",
		height: "5' 1''",
		occupation: "Vigilante. Formerly Chicago Police Department. Regularly considered one of the most dangerous non-magical mortals amongst supernatural crowds.",
		hp: "85",
		damage: "11 -> 33",
		attkDam: 10 + Math.floor(Math.random()*10) + Math.floor(Math.random()*8) + Math.floor(Math.random()*4) + 1
	}

	var michaelCarpenter = {
		name: "Micahel Carpenter",
		height: "6' 4''",
		occupation: "Construction company owner. Father of 8. Descendant of Charlemange. Knight of the Cross - no really, that's what his title is in the warrior-monk order sect of the Catholic church he's in. He's the most recent wielder of Amoracchius, the Sword of Love. Others know it as Excalibur.",
		hp: "100",
		damage: "14 -> 26",
		attkDam: 14 + Math.floor(Math.random()*12)
	}


	$("#baddie-gallery").hide()
	$("#arena").hide()
	$("#level-up-screen").hide()
	$("#endgame-screen").hide()



	function screenShuffler(nextscreen){
		if (nextscreen === "to-baddies"){
			$(".row").hide(500)
			$("#baddie-gallery").show()

		} else if (nextscreen === "to-arena"){
			$(".row").hide(500)
			$("#arena").show()

		} else if (nextscreen === "to-lvlup"){
			$(".row").hide(500)
			$("#level-up-screen").show()

		}else if(nextscreen === "to-endgame"){
			$(".row").hide(500)
			$("#endgame-screen").show()

		} else if(nextscreen === "to-champs"){
			$(".row").hide(500)
			$("#champ-select").show()
		};
	}

	$(".btn").on("click", function(){
		var rowCall = $(this).attr("id");
		console.log(rowCall);
		screenShuffler(rowCall);

	});

});	
