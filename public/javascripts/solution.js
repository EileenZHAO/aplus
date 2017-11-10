/***********************************
 * 功能：艾尔帕思“解决方案”页面JS文件
 * 开发者：赵兴英
 * 最后修改日期：2017.9.11
 ***********************************/

//图片资源
var imgGroup = [
	{
		name:"全部",
		imgUrl: ""
	},
	{
		name: "电子政务",
		imgUrl: [
			"../images/solution/case-page-1.png",
			"../images/solution/case-page-2.png",
			"../images/solution/case-page-3.png",
			"../images/solution/case-page-4.png"
		]
	},
	{
		name: "电子商务",
		imgUrl: [
			"../images/solution/case-page-5.png",
			"../images/solution/case-page-8.png",
			"../images/solution/case-page-10.png",
			"../images/solution/case-page-11.png"
		]
	},
	{
		name: "智慧教育",
		imgUrl: [
			"../images/solution/case-page-14.png",
			"../images/solution/case-page-15.png",
			"../images/solution/case-page-16.png",
			"../images/solution/case-page-26.png"
		]
	},
	{
		name: "智慧医疗",
		imgUrl: [
			"../images/solution/case-page-23.png",
			"../images/solution/case-page-28.png",
			"../images/solution/case-page-22.png",
			"../images/solution/case-page-27.png"
		]
	},
	{
		name: "智慧农业",
		imgUrl: [
			"../images/solution/case-page-8.png",
			"../images/solution/case-page-29.png",
			"../images/solution/case-page-30.png",
			"../images/solution/case-page-19.png"
		]
	},
	{
		name: "智慧交通",
		imgUrl: [
			"../images/solution/case-page-7.png",
			"../images/solution/case-page-31.png",
			"../images/solution/case-page-32.png",
			"../images/solution/case-page-33.png"
		]
	},
	{
		name: "智慧旅游",
		imgUrl: [
			"../images/solution/case-page-6.png",
			"../images/solution/case-page-34.png",
			"../images/solution/case-page-35.png",
			"../images/solution/case-page-36.png"
		]
	},
	{
		name: "物联网",
		imgUrl: [
			"../images/solution/case-page-17.png",
			"../images/solution/case-page-18.png",
			"../images/solution/case-page-38.png",
			"../images/solution/case-page-37.png"
		]
	},
	{
		name: "企业级应用",
		imgUrl: [
			"../images/solution/case-page-20.png",
			"../images/solution/case-page-21.png",
			"../images/solution/case-page-24.png",
			"../images/solution/case-page-25.png"
		]
	}
];

var solution_view = document.getElementsByClassName("solution-view")[0];
window.onload = function () {
	var cardIndex = sessionStorage.getItem("cardIndex");
	tabList[cardIndex].onclick();
	sessionStorage.setItem("cardIndex","0");
	ctrlNavLink({
		index: "index.html",
		service: "service.html",
		solution: "solution.html",
		about: "about.html"
	});
}

//创建“控制图片分类切换区域”
var section = document.createElement("section");
//设置class属性
section.setAttribute("class", "tab");
for(var i = 0; i < imgGroup.length; i++) {
	section.innerHTML += "<a name='" + imgGroup[i].name + "'>" + imgGroup[i].name + "</a>";
}

//将已创建的section添加进HTML中
solution_view.appendChild(section);
//获取第一个子元素a，并为其设置默认属性值
document.getElementsByClassName("tab")[0].firstElementChild.className = "active";


var ul = document.createElement("ul");
ul.setAttribute("class", "solution-container");
for(var i = 0; i < imgGroup.length; i++) {
	for(var j = 0; j < imgGroup[i].imgUrl.length; j++) {
		ul.innerHTML += "<li name='" + imgGroup[i].name + "'><img src='" + imgGroup[i].imgUrl[j] + "'</li>";
	}
}

//将已创建的ul添加进HTML中
solution_view.appendChild(ul);
var tab = document.getElementsByClassName("tab")[0];
var tabList = tab.children;
var ulList = document.getElementsByTagName("ul")[0].children;
var ulList_leng = ulList.length;
for(var j = 0; j < tabList.length; j++) {
	tabList[j].index = j;
	tabList[j].onclick = function () {
		clearStyle();
		this.setAttribute("class", "active");
		for(var i = 0; i < ulList_leng; i++) {
			if(this.name == "全部") {
				ulList[i].style.display = "block";
			}
			else if(this.name !== ulList[i].getAttribute("name")) {
				ulList[i].style.display = "none";
			}
			else {
				ulList[i].style.display = "block";
			}
		}
	}
}

/*************************************
 * 功能：清除class属性值
 *************************************/
function clearStyle() {
	var tab = document.getElementsByClassName("tab")[0];
	var tabList = tab.children;
	for(var i = 0; i < tabList.length; i++) {
		tabList[i].className = "";
	}
}
