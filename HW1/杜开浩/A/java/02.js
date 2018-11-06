var flash = document.getElementById("flash");
var is = flash.getElementsByTagName('img');

var i = 0;

setInterval(function(){
	c++;
	
	c = c==3?0:i;
	
	for (var c=0;c<is.length;c++) {
	is[c].style.display ="block";
	}
	
   is[c].style.display='block';
},2000)
