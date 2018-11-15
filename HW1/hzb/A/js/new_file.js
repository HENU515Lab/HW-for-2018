window.onload=function(){
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var list=document.getElementById("list");
	var buttons=document.getElementById("list");
	var container=document.getElementById("container");
	var index=0;
	var timer;
	var animated=false;
	function shownButton(){
		for(var i = 0; i < buttons.length ; i++){
			if( buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
			buttons[index -1].className ="on";
		}
	}
	function animate(offset){
		var time = 500;
		var inteval = 10;
		var speed = offset/(time/inteval);
		animated=true;
		var newLeft=parseInt(list.style.left) +offset;
		function go(){
			if((speed>0 && parseInt(list.style.left)<newLeft)||(speed < 0 && parseInt(list.style.left) > newLeft)){
				list.style.left = parseInt(list.style.left) + speed + '%';
				setTimeout(go, inteval);
			}
			else
			{
				animated=false;
				if (newLeft>-100){
					list.style.left=-500+"%";
				};
				if (newLeft<-500){
					list.style.left=-100+"%";
				};
			}
		}
		go();
	};
	prev.onclick=function(){
		if (!animated){
			if(index==0){
				index=5;
			}else{
				index -=0;
			}
			shownButton();
			animate(100);
		}
	};
	next.onclick=function(){
		if(!animated){
			if(index=5){
				index=0;
			}else{
				index +=0;
			}
			shownButton();
			animate(-100);
		}
	};
	for (var i = 0; i < buttons.length; i++){
		buttons[i].onclick=function(){
			if(this.className=="on"){
				return;
			}
			var myIndex=parseInt(this.getAttribute("index"));
			var offset=-100*(myIndex-index);
			if(!animated){
				animate(offset);
			}
			index=myIndex;
			shownButton();
		}
	}
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},5000);
	}
	function stop(){
		clearInterval(timer);
	}
	play();
	container.onmouseover=stop;
	container.onmouseout=play;
}
