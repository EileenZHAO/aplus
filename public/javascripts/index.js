/***********************************
 * 功能：动态加载首页内容
 * 开发者：赵兴英
 * 最后修改日期：2017.9.11
 ***********************************/
var carou_sel = document.getElementsByClassName("carousel")[0];
var carouselChild = carou_sel.children;
window.onload = function() {
	bannerList(carouselChild);
	contactUs();
}

ctrlNavLink({
	index: "index.html",
	service: "service.html",
	solution: "solution.html",
	about: "about.html"
});
/***********************************
 * 功能：图片轮播
 ***********************************/

function bannerList(carouselChild) {
	var count = 0;
	setInterval(function () {
		carouselChild[count].style.display = "none";
		count = ++count;
		//如果当前的计数器不等于图片列表长度则将当前图片显示出来并设置属性值
		if(count != carouselChild.length) {
			carouselChild[count].style.display = "block";
			carouselChild[count].getElementsByTagName("div")[0].setAttribute("class","move");
		}
		//当前的计数器等于图片列表长度则将计数器归零并将第一张图片显示出来
		else {
			count = 0;
			carouselChild[count].style.display = "block";
		}
	},3000);
}

//设置“我们的服务”临时会话
var setCardIndex = sessionStorage.setItem("cardIndex", "0");
var toService = document.getElementsByClassName("ourService")[0];
var linkItem = toService.getElementsByTagName("a"),
	linkItem_leng = linkItem.length;
for(var l = 0; l < linkItem_leng; l++) {
	linkItem[l].index = l;
	linkItem[l].onclick = function () {
		sessionStorage.setItem("cardIndex", this.index);
	}
}
//设置“方案案例”临时会话
var toSolution = document.getElementsByClassName("home-case")[0].getElementsByTagName("a");
var toSolution_leng = toSolution.length;
for(var m = 0; m < toSolution_leng; m++) {
	toSolution[m].index = m;
	toSolution[m].onclick = function () {
		sessionStorage.setItem("cardIndex", this.index + 1);
	}
}



/**********************************
 * 功能：联系我们点击事件
 **********************************/
var homeContact = document.getElementsByClassName("home-contact")[0];
var contactList = homeContact.getElementsByTagName("li");
var contactList_leng = contactList.length;
var mapsBack = document.getElementsByClassName("maps")[0];
function contactUs() {
	for(var i = 0; i < contactList_leng; i++) {
		contactList[0].className = "active";
		contactList[i].index = i;
		contactList[i].onclick = function () {
			//调用“清除class属性值”
			clearClass();
			//设置当前选中元素的class属性值
			this.className = "active";
		}
	}
}


var map_Ctrl = document.getElementById("mapCtrl");
map_Ctrl.onclick = function () {
	var expend = document.getElementById("expend");
	var city = document.getElementById("city");
	var maps = document.getElementsByClassName("maps")[0];
	if(expend.textContent == "展开") {
		maps.style.height = "400px";
		expend.textContent = "收起";
		map_Ctrl.setAttribute("class", "pack");
	}
	else if(expend.textContent == "收起") {
		maps.style.height = "150px";
		expend.textContent = "展开";
		map_Ctrl.className = "";
	}

}


/*************************************
 * 功能：清除class属性值
 *************************************/
function clearClass() {
    for(var k = 0; k < contactList_leng; k++) {
        contactList[k].className = "";
    }
}