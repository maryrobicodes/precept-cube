const cards = [
	["What is the will of God (Old Testament)?","Psalm 40:8","I delight to do thy will, O my God: yea, thy law is within my heart."],
	["What is the  will of God. (New Testament)?","Hebrews 10:7","Then said I, Lo, I come (in the volume of the book it is written of me,) to do thy will, O God."],
	["What is the spirit?","John 6:63","It is the spirit that quickeneth; the flesh profiteth nothing: the words that I speak unto you, they are spirit, and they are life."],
	["What is water?","Ephesians 5:26","That he might sanctify and cleanse it with the washing of water by the word"]


];

var nquest1 = cards.map(q => q[0]);
nquest = nquest1.sort(function(){return 0.5 - Math.random()});

var nverse1 = cards.map(v => v[1]);
nverse = nverse1.sort(function(){return 0.5 - Math.random()});

var nscript1 = cards.map(s => s[2]);
nscript = nscript1.sort(function(){return 0.5 - Math.random()});


