function myFunction() 
{document.getElementById("myDropdown").classList.toggle("show");}

function filterFunction() 
   {var input, ul, li, a, i;
    input = document.getElementById("myInput");
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) 
    {if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) 
        {a[i].style.display = "";} 
    else {a[i].style.display = "none";}
    }
   }
   
var flash = document.getElementById("flash");
var is = flash.getElementsByTagName('div');
var ls = flash.getElementsByTagName('li');


var i = 0;
showSlides(i);

var myvar=setInterval(function(){timer()},4000);

function timer(){
    i++;

    i = i==4?0:i;
    
    for (var c=0;c<is.length;c++) {
    	is[c].style.display ="none";
    	ls[c].style.background ="darkgray";
    }
     
    is[i].style.display = "block";
    ls[i].style.background = "#FFFFFF";
}
function prev(){
	clearInterval(myvar);
    i--;

    i = i==-1?3:i;
    
    for (var c=0;c<is.length;c++) {
    	is[c].style.display ="none";
    	ls[c].style.background ="darkgray";
    }
     
    is[i].style.display = "block";
    ls[i].style.background = "#FFFFFF";
    myvar=setInterval(function(){timer()},4000);
}
function next(){
	clearInterval(myvar);
    i++;

    i = i==4?0:i;
    
    for (var c=0;c<is.length;c++) {
    	is[c].style.display ="none";
    	ls[c].style.background ="darkgray";
    }
     
    is[i].style.display = "block";
    ls[i].style.background = "#FFFFFF";
    myvar=setInterval(function(){timer()},4000);
}

function currentSlide(n) {
showSlides(i = n);
myvar=setInterval(function(){timer()},4000);
}

function showSlides(n) {
	clearInterval(myvar);
	
    var i=n;

    for (var c=0;c<is.length;c++) {
    	is[c].style.display ="none";
    	ls[c].style.background ="darkgray";
    }
     
    is[i].style.display = "block";
    ls[i].style.background = "#FFFFFF";
}

