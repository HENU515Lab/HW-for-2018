$(function(){
	var oul = $('.photo-container ul');
	var ali = $('.photo-container ul li');
	var numLi = $('.photo-container ol li');
	
	var right = $('.right');
	var left = $('.left');
	
	var aliWidth = $('.photo-container ul li').eq(0).width();
	var _now = 0; //控制下面小图标的数值的计数器
	var _now2 = 0; //控制图片运动距离的计数器
	var timeId;
	
	numLi.click(function(){
		var index = $(this).index();
		_now = index;
		_now2 = index;
		$(this).addClass('current').siblings().removeClass();
		oul.animate({'left':-aliWidth*index},1000);
	});
	
	function slider(){                //这是图片运动得函数
		if(_now==numLi.size()-1){
			ali.eq(0).css({
				'position':'relative',
				'left': oul.width()
			});
			_now = 0;
		}
		else{
			_now++;
		}
		
		_now2++;
		
		numLi.eq(_now).addClass('current').siblings().removeClass();
		oul.animate({'left':-aliWidth*_now2},1500,function(){
			if(_now==0){
				ali.eq(0).css('position','static');
				oul.css('left',0);
				_now2 = 0;
		    }
		});
	}
	
	timeId = setInterval(slider,2000);
		
	$('.photo-container').mouseover(function(){
		clearInterval(timeId);
	});
	
	$('.photo-container').mouseout(function(){
		timeId = setInterval(slider,2000);
	});
	
	
	
	right.click(function(){
		clearInterval(timeId);
		if(_now==numLi.size()-1){
			ali.eq(0).css({
				'position':'relative',
				'left': oul.width()
			});
			_now = 0;
		}
		else{
			_now++;
		}
		
		_now2++;
		
		numLi.eq(_now).addClass('current').siblings().removeClass();
		oul.animate({'left':-aliWidth*_now2},1000,function(){
			if(_now==0){
				ali.eq(0).css('position','static');
				oul.css('left',0);
				_now2 = 0;
		    }
		});
	});
	
	
	left.click(function(){
		clearInterval(timeId);
		if(_now==0){
//			ali.eq(3).css({
//				'position':'relative',
//				'left': 0
//			});
			_now = numLi.size()-1;
		}
		else{
			_now--;
		}
		
		_now2--;
		
		numLi.eq(_now).addClass('current').siblings().removeClass();
		oul.animate({'left':-aliWidth*_now},1000,);//function(){
//			if(_now==numLi.size()-1){
//				ali.eq(3).css('position','static');
//				oul.css('left',oul.width());
//				_now2 = numLi.size()-1;
//		    }
//		});
	});
	
	
});
