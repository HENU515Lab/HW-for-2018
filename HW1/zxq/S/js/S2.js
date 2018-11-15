    var oSpan=document.getElementsByName('lunboSpan');
    var oUL=document.getElementsByClassName('lunboUl')[0];//获取ul标签
    var oBtn=document.getElementsByClassName('btn')[0];
    var oDiv=oBtn.getElementsByTagName('div');
    var  oBox=document.getElementById('box');
    var index=0;
    var number=0;
    var timer;//定义定时器变量
    play();
    for(var i=0;i<oSpan.length;i++){			
        oSpan[i].nxl=i;//自定义属性 i=0,1,2,3,4
        oSpan[i].onclick=function () {
            oSpan[index].className='';//index初始为0，将第一个span属性清空，即去掉了on里的属性
            index=this.nxl;//保存获取的被点击的序列号
            this.className='on';
            oUL.style.marginLeft=-100*index+'%';
        }
    }
    //点击按钮实现图片变换
    for(var j=0;j<oDiv.length;j++){
        oDiv[j].nxl=j;
        oDiv[j].onclick=function () {
            number=this.nxl;
            oSpan[index].className='';
            if (number){
                index++;
                if(index>4) {
                    index=0;
                }
            }else {index--;
                if (index<0){
                    index=4;
                }
            }
            oSpan[index].className='on';
            oUL.style.marginLeft=-100*index+'%';
        }
    }
    //鼠标滑在id为box的div上
    oBox.onmouseover = function () {
        clearInterval(timer);
    }
    //鼠标滑出id为box的div
    oBox.onmouseout = function () {//onmouseleave同onmouseout 鼠标滑出
       play();//调用play函数
    }
    //使用定时器实现图片自动变换
    function play() {
        timer = setInterval(function () {
            oSpan[index].className='';
            index++;
            if(index>4){index=0;}
            oSpan[index].className='on';
            oUL.style.marginLeft = -100*index+'%';
        },2000)//每2秒执行一次
    }