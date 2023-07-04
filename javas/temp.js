// marking

function gomark() {
	document.getElementById("show").innerHTML = "Question" + question.activeIndex + "Script: " + script.activeIndex + "Verse: " + verse.activeIndex;
	
	if ( question.activeIndex === verse.activeIndex && question.activeIndex === script.activeIndex ) {
	document.getElementById("show1").innerHTML = "CORRECT";
	cards.splice(question.activeIndex, 1);
	k = parseInt(verse.activeIndex);
	l = parseInt(script.activeIndex);
	m = parseInt(question.activeIndex);
	verse.removeSlide(k);
	script.removeSlide(l);
	question.removeSlide(m);
	}
	else {
		document.getElementById("show1").innerHTML = "WRONG. TRY AGAIN"
	}
}

// hint	
	function hint() {
   document.getElementById("show").innerHTML = cards[question.activeIndex][1];
   setTimeout(hide, 3000);
}

function hide() {
   document.getElementById("show").innerHTML = " ";
};



//////////////////////////////////////////////////////////////


// marking current thing


// marking

function gomark() {

test1 = String(nquest1[question.activeIndex]+ "," + nverse[verse.activeIndex] + "," + nscript[script.activeIndex]);



for( var i = 0, len = cards.length; i < len; i++ ) {
    if( cards[i] == test1 ) {
        result = cards[i];
		 break;
            }
		

}

test11 = result;

	

	
	if ( test1 == test11 ) {
	document.getElementById("show1").innerHTML = "CORRECT" + test1 + test11 + cards.length + cards;
	// cards.splice(question.activeIndex, 1);
	k = parseInt(verse.activeIndex);
	l = parseInt(script.activeIndex);
	m = parseInt(question.activeIndex);
	verse.removeSlide(k);
	script.removeSlide(l);
	question.removeSlide(m);
	}
	else {
		document.getElementById("show1").innerHTML = "WRONG. TRY AGAIN " + test1 + test11 + cards.length + cards;

	}
}
