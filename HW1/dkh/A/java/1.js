var flash = document.getElementById("flash");
var is = flash.getElementsByTagName('img');

var c = 0;

setInterval(function(){
	c++;
    c = c==3?0:c;
	for (var i=0;c<is.length;i++) {
	is[c].style.display ="none";
	}
	
   is[c].style.display='block';
},1000)