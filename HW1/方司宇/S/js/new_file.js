window.onload = function() {
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var bottom = document.getElementById('bottom').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var timer;
	var animated = false;

	function bottomShow() {
		for(var i = 0; i < bottom.length; i++) {
			if(bottom[i].className == "on") {
				bottom[i].className = "";
			}
		}
		bottom[index - 1].className = "on";
	}

	function animate(offset) {
		animated = true
		var newleft = parseInt(list.style.left) + offset;
		var time = 800; // 滑动总时间
		var interval = 10; //滑动间隔时间
		var speed = offset / (time / interval); //每次滑动量
      
        
        
		function go() {
			if((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)){
				list.style.left = parseInt(list.style.left) + speed + 'px';
			    setTimeout(go, interval);
		    } 
		else {
			animated = false
			list.style.left = newleft + 'px';
			if(newleft > -1519.2) {
				list.style.left = -4557.2 + 'px';
			}
			if(newleft < -4557.2) {
				list.style.left = -1519.2 + 'px';
			}
		}
		}
        go();
	}
	function play(){
		 timer =setInterval (function(){
		 	next.onclick();
		 }, 2000)
	}
	
	function stop(){
		clearInterval(timer);
	}
	
	next.onclick = function() {
		index += 1;
		if(index > 3) {
			index = 1
		}
		bottomShow();
		if (!animated){
		animate(-1519.2);
		}
	}
	prev.onclick = function() {
		index -= 1;
		if(index < 1) {
			index = 3
		}
		bottomShow();
		if (!animated){
		animate(+1519.2);
		}
	}
	for(var i = 0; i < bottom.length; i++) {
		(function(i) {
			bottom[i].onclick = function() {
				if(this.className == 'on') {
					return;
				}

				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 1519.2 * (index - clickIndex);
				if (!animated){
				animate(offset);
				}
				index = clickIndex;
				bottomShow();
			}
		})(i)
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	play();
};