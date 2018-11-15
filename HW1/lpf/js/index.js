window.onload = function(){
	var oUllist = document.getElementById('tab');
	var oLi = oUllist.getElementsByTagName('li');
	
	var oUser = document.getElementById('user_content');
	var odiv = oUser.getElementsByClassName('showContent');
	var length = oLi.length;
	for(var i = 0; i < length; i ++){
		oLi[i].index = i;
		oLi[i].onclick = function(){
			var otherIndex = length-this.index - 1;
			oLi[this.index].className = 'current_tab';
			oLi[otherIndex].className = ' ';

			odiv[otherIndex].style.display = 'none';
			odiv[this.index].style.display = 'block';
			
		}
	}
}
