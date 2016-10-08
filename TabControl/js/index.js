function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	var timer;
	var titles = $('notice-tit').getElementsByTagName('li');
	var divs = $('notice-bd').getElementsByTagName('div');
	$('model').onchange = function(e){
		switch(e.target.value){
			case "1":
				selectmodel1();clearInterval(timer); break;
			case "2":
				selectmodel2();clearInterval(timer); break;
			case "3":
				selectmodel3();clearInterval(timer); break; 
			case "4":
				selectmodel4(); break;
		}
	};
	function clear(){
		for (var j = 0; j < titles.length; j++) {
			titles[j].className = "";	
			divs[j].style.display="none";
		}
		titles[0].className="select";
		divs[0].style.display="block";
	}
	function selectmodel1(){
		clear();
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onclick = function(){};
			titles[i].onmouseout =function(){};
			titles[i].onmouseover = function(){
				changeOption(this.id);
			}
		}
	};
	function selectmodel2(){
		clear();
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onmouseover=function(){};
			titles[i].onmouseout =function(){};
			titles[i].onclick = function(){
				changeOption(this.id);
			}
		}
	};
	function selectmodel3(){
		clear();
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onclick = function(){};
			titles[i].onmouseout =function(){};
			titles[i].onmouseover = function(){
				var that = this;
				timer = window.setTimeout(function(){
					for (var j = 0; j < titles.length; j++) {
							titles[j].className = "";	
							divs[j].style.display="none";
						}			
					that.className="select";
					divs[that.id].style.display="block";
				},600);
			}
		}
	};
	function selectmodel4(){
		var index = 0;
		clear();
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onmouseover = function(){
				clearInterval(timer);
				changeOption(this.id);
			}
			titles[i].onmouseout =function(){
				index = this.id;
				usetimer(index);
			}
		}
		usetimer(index);
	}
	function usetimer(index){
		timer = window.setInterval(function(){
			index>=4 ? index = 0: index++;
			changeOption(index);
		},1000);
	}
	function changeOption(curIndex){
		for (var j = 0; j < titles.length; j++) {
			titles[j].className = "";	
			divs[j].style.display="none";
		}
		titles[curIndex].className="select";
		divs[curIndex].style.display="block";
	}
}
