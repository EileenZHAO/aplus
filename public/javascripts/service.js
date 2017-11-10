/***********************************
 * 功能：艾尔帕思“服务与支持”页JS文件
 * 开发者：赵兴英
 * 最后修改日期：2017.9.11
 ***********************************/
var soft_ware = document.getElementById("software");
var indicator_smooth = document.getElementsByClassName("indicator")[0];
window.onload = function () {
	indicator_smooth.style.left = soft_ware.offsetLeft + "px";
	var cardIndex = sessionStorage.getItem("cardIndex");
	tabCtrl[cardIndex].onclick();
	sessionStorage.setItem("cardIndex", "0");
	ctrlNavLink({
		index: "index.html",
		service: "service.html",
		solution: "solution.html",
		about: "about.html"
	});
}
window.onresize = function(){
	var activeEle = document.getElementsByClassName("tab")[0].getElementsByClassName("active")[0];
	indicator_smooth.style.left = activeEle.offsetLeft + "px";
	indicator_smooth.style.width = activeEle.offsetWidth + "px";
}

//获取控制区域的a标签
var tabCtrl = document.getElementsByClassName("tab")[0].getElementsByTagName("a");
var tabCtrl_leng = tabCtrl.length;
//获取“详情”内的子元素
var service_details = document.getElementsByClassName("service-detail")[0].children;
var service_details_leng = service_details.length;

//获取轮播图
var bannerList = document.getElementsByClassName("banner");
var bannerList_leng = bannerList.length;
for(var l = 0; l < bannerList_leng; l++) {
	if(bannerList[l].className !== "banner banner-software") {
		bannerList[l].style.display = "none";
	}
}
for(var k = 0; k < service_details_leng; k++) {
	if(service_details[k].className !== "software") {
		service_details[k].style.display = "none";
	}
}
for(var i = 0; i < tabCtrl_leng; i++) {
	tabCtrl[i].index = i;
	tabCtrl[i].onclick = function () {
		//调用：清除class属性值函数
		clearStyle();
		this.setAttribute("class", "active");
		for(var j = 0; j < tabCtrl_leng; j++) {
			if(this.index !== j) {
				bannerList[j].style.display = "none";
				service_details[j].style.display = "none"
			}
		}
		bannerList[this.index].style.display = "block";
		service_details[this.index].style.display = "block";
		indicator_smooth.style.left = this.offsetLeft + "px";
	}
}

/*************************************
 * 功能：清除class属性值
 *************************************/
function clearStyle() {
	var tab = document.getElementsByClassName("tab")[0];
	var tabList = tab.getElementsByTagName("a");
	for(var i = 0; i < tabList.length; i++) {
		tabList[i].className = "";
	}
}

