
// array length
curarr = cards.length;

// current blocks


function gomark() {
	test1 = String(nquest1[question.activeIndex]+ "," + nverse[verse.activeIndex] + "," + nscript[script.activeIndex]);
	
	for( var i = 0, len = cards.length; i < len; i++ ) {
    if( cards[i] == test1 ) {
        result = cards[i];
		 break;
            }
		else {
			document.getElementById("show1").innerHTML = "TRY AGAIN** " + nscript[script.activeIndex];
		}

}
	
test2 = result;
	
	if (test1 == test2) {
	
	// remove question
	m = parseInt(question.activeIndex);
	question.removeSlide(m);
	nquest.splice(question.activeIndex, 1);
	
	// remove verse
	k = parseInt(verse.activeIndex);
	verse.removeSlide(k);
	nverse.splice(verse.activeIndex, 1);
	
	// remove script
	l = parseInt(script.activeIndex);
	script.removeSlide(l);
	nscript.splice(script.activeIndex, 1);
	
	document.getElementById("show1").innerHTML = "CORRECT " + nscript.length;
	
	}
	
	else if (nscript.length == 1) {
		document.getElementById("show1").innerHTML = "YOU WON"
	}

	else {
		document.getElementById("show1").innerHTML = "TRY AGAIN " + nscript.length;
	}
}

// sets the splice

function setslide() {

for (let i = 0; i < curarr; i++) {

const para = document.createElement("div");
para.classList = "swiper-slide";
para.innerHTML = nquest[i];
document.getElementById("question").appendChild(para);

};

//create Element for array for verse

for (let i = 0; i < curarr; i++) {

const para1 = document.createElement("div");
para1.classList = "swiper-slide";
para1.innerHTML = nverse[i];
document.getElementById("verse").appendChild(para1);

};

//create Element for array for script

for (let i = 0; i < curarr; i++) {

const para2 = document.createElement("div");
para2.classList = "swiper-slide";
para2.innerHTML = nscript[i];
document.getElementById("script").appendChild(para2);

};
};

setslide();

// swiper start question

    var question = new Swiper(".question", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }
    });


//swiper end

// swiper start verse

    var verse = new Swiper(".verse", {
	  effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }
    });


//swiper end

// swiper start script

    var script = new Swiper(".script", {
	  effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }
    });


//swiper end




// hint	
	function hint() {
		
			for( var i = 0, len = cards.length; i < len; i++ ) {
    if( cards[i][0] == nquest1[question.activeIndex] ) {
        hintss = cards[i][1];
		 break;
            }

}
   document.getElementById("show").innerHTML = hintss;
   setTimeout(hide, 3000);
}

function hide() {
   document.getElementById("show").innerHTML = " ";
};












