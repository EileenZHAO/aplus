/***********************************
 * 功能：艾尔帕思公共JS文件
 * 开发者：赵兴英
 * 最后修改日期：2017.9.11
 ***********************************/
var body = document.getElementsByTagName("body")[0];

ctrlNavLink({
	index: "index.html",
	service: "service.html",
	solution: "solution.html",
	about: "about.html"
});
/*************************************
 * 创建“页眉&页脚”函数
 *************************************/
function ctrlNavLink(param) {
	 //页眉部分
	var headerContent = document.getElementsByTagName("header")[0];
	headerContent.innerHTML = '<div class="logo">' +
		'</div>' +
		'<div class="menu">' +
		'<a href="' + param.index + '">首页</a>' +
		'<a href="' + param.service + '">服务与支持</a>' +
		'<a href="' + param.solution + '">解决方案</a>' +
		'<a href="' + param.about + '">关于我们</a>' +
		'<button id="sign-in" type="button">登录</button>' +
		'<button id="register" type="button">注册</button>' +
		'<span id="welcome"></span>' +
		'</div>';
	//加载页眉时，先获取用户名
	var getNiceName = sessionStorage.getItem("niceName_se");
	//如果用户名已存在，则移除登录注册按钮并添加“欢迎”语
	if(getNiceName) {
		var regBtn = document.getElementById("register");
		var sign_inBtn = document.getElementById("sign-in");
		var welCome = document.getElementById("welcome");
		regBtn.remove();
		sign_inBtn.remove();
		welCome.textContent = "亲爱的" + getNiceName + "，欢迎您！";
	}

	//页脚部分
	var footerContent = document.getElementsByTagName("footer")[0];
	footerContent.innerHTML = '<div class="f-Container">' +
		'<div>' +
		'<h4>服务</h4>' +
		'<a href="#">软件定制</a>' +
		'<a href="#">软件系统集成</a>' +
		'<a href="#">信息化建设咨询</a>' +
		'<a href="#">网络运营</a>' +
		'</div>' +
		'<div>' +
		'<h4>运营</h4>' +
		'<a href="#">微信运营</a>' +
		'<a href="#">APP运营</a>' +
		'<a href="#">SEM</a>' +
		'<a href="#">SEO</a>' +
		'</div>' +
		'<div>' +
		'<h4>产品</h4>' +
		'<a href="#">电子商务平台</a>' +
		'<a href="#">数字校园平台</a>' +
		'<a href="#">物联网平台</a>' +
		'<a href="#">数据采集监控平台</a>' +
		'<a href="#">IT技术服务</a>' +
		'</div>' +
		'<div>' +
		'<h4>公司</h4>' +
		'<a href="#">团队</a>' +
		'<a href="#">职位</a>' +
		'<a href="#">联系</a>' +
		'<a href="#">魏蜀吴</a>' +
		'</div>' +
		'</div>' +
		'<div class="copyRight">' +
		'<span>Copy&nbsp;right&nbsp;2015&nbsp;成都艾尔帕思科技有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved&nbsp;蜀ICP备&nbsp;15031645号-1</span>' +
		'</div>';

	/*************************************
	 * 功能：导航按钮选中状态
	 *************************************/
	var navList = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
	if(location.href.indexOf("index.html") != -1) {
		navList[0].setAttribute("class", "active");
	}
	else if(location.href.indexOf("service.html") != -1) {
		navList[1].setAttribute("class", "active");
	}
	else if(location.href.indexOf("solution.html") != -1) {
		navList[2].setAttribute("class", "active");
	}
	else if(location.href.indexOf("about.html") != -1) {
		navList[3].setAttribute("class", "active");
	}

	/*************************************
	 * 功能：“注册”&“登录”按钮点击事件
	 *************************************/
	var regBtn = document.getElementById("register");
	var sign_inBtn = document.getElementById("sign-in");

	//点击注册按钮
    regBtn.onclick = function () {
    	//调用“弹出框插件”函数
		createPopupBox({
			id: 'register',
			mesg: '<div>' +
					'<p class="erroMesg"></p>' +
					'<label>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label>' +
					'<input id="userAcount" type="text" name="form-ele" required placeholder="请输入邮箱或11位手机号">' +
					'<span>*</span>' +
					'</div>' +
					'<div>' +
					'<p class="erroMesg"></p>' +
					'<label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>' +
					'<input id="userPwd" type="password" name="form-ele" required placeholder="6-16位任意字符（空格除外）">' +
            		'<span>*</span>' +
					'</div>' +
					'<div>' +
					'<p class="erroMesg"></p>' +
					'<label>确认密码：</label>' +
					'<input id="userRePwd" type="password" name="form-ele" required placeholder="确认密码必须与密码保持一致">' +
            		'<span>*</span>' +
					'</div>' +
					'<div>' +
					'<p class="erroMesg"></p>' +
					'<label>验证码：</label>' +
					'<input id="validate" name="form-ele" type="text" required>' +
					'<span>*</span>' +
           			'<input id="createCode" type="button" name="form-ele">' +
					'</div>' +
					'<div>' +
					'<button id="register2" type="button" name="form-ele">注册</button>' +
					'</div>'
		});
		body.style.overflow = "hidden";
	}

	//点击登录按钮
    sign_inBtn.onclick = function () {
        createPopupBox({
            id: 'sign-in',
            mesg: '<div>' +
            '<label>用户名：</label>' +
            '<input id="userName-login" type="text" placeholder="请输入邮箱或手机号">' +
            '</div>' +
            '<div>' +
            '<label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>' +
            '<input id="userPwd-login" type="password" placeholder="6-16位密码">' +
            '</div>' +
			'<div>' +
			'<button id="log-in">登录</button>' +
			'<button id="cancel">取消</button>' +
			'</div>'
		});
        body.style.overflow = "hidden";
    }
}

/*************************************
* 功能：弹出框插件
 * 参数：
 * 1、id：当前点击按钮的id
 * 2、mesg：表单内的内容
*************************************/
function createPopupBox(param) {
	//创建弹出框元素
	var component = document.createElement("component");
	component.setAttribute("class","component");
	//如果当前点击的是注册按钮
	if(param.id === "register") {
        component.innerHTML = '<masklayer></masklayer>' +
            '<popup-box>' +
            '<p class="popupHead">新用户注册' +
            '</p>'+
			'<span class="btnClose">x</span>' +
            '<form>' + param.mesg + '</form>'  +
            '</popup-box>';
        body.appendChild(component);
        validateForm();
	}
	//如果当前点击的是登录按钮
	else if(param.id === "sign-in") {
        component.innerHTML = '<masklayer></masklayer>' +
            '<popup-box>' +
            '<p class="popupHead">请登录' +
            '</p>'+
            '<span class="btnClose">x</span>' +
            '<form>' + param.mesg + '</form>'  +
            '</popup-box>';
        body.appendChild(component);

		var popup_box = document.getElementsByTagName("popup-box")[0];
		popup_box.style.cssText = "height: 300px;";
		var log_in = document.getElementById("log-in");
		log_in.parentElement.style.cssText = "margin-top: 30px;";
		var cancel = document.getElementById("cancel");
		var userName_login = document.getElementById("userName-login");
		var userPwd_login = document.getElementById("userPwd-login");
		var regBtn = document.getElementById("register");
		var sign_inBtn = document.getElementById("sign-in");
		log_in.onclick = function () {
			var getUserAcount = localStorage.getItem("userAcount");
			var getUserPwd = localStorage.getItem("userPwd");
			var welCome = document.getElementById("welcome");
			//var getLocal_niceName = localStorage.getItem("niceName");
			var setNiceName_se = sessionStorage.setItem("niceName_se", localStorage.getItem("niceName"));
			var getNiceName = sessionStorage.getItem("niceName_se");
			if(userName_login.value == getUserAcount && userPwd_login.value == getUserPwd) {
				this.parentElement.parentElement.parentElement.parentElement.remove();
				regBtn.remove();
				sign_inBtn.remove();
				welCome.textContent = "亲爱的" + getNiceName + "，欢迎您！";
			}
			else {
				alert("用户名或密码错误！");
			}
		}
		cancel.onclick = function () {
			this.parentElement.parentElement.parentElement.parentElement.remove();
		}
	}

    closeBtn();
	function validateForm() {
        //生成随机验证码
        var create_Code = document.getElementById("createCode");
        //声明一个空字符串用以接受生成的随机验证码
        var code = "";
        //验证码为5位
        var codeLength = 5;
        //可以是字母+数字的随机字符，显示时有大小写之分
        var random = new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
        //生成随机验证码
        for(var i = 0; i < codeLength; i++) {
            var index = Math.floor(Math.random() * 62);
            code += random[index];
        }
        //将生成的验证码赋值给相应的验证码框
        create_Code.value = code;

        /***********************************
         * 功能：刷新按钮点击事件
         ***********************************/
        function refresh() {
            code = "";
            for(var i = 0; i < codeLength; i++) {
                var index = Math.floor(Math.random() * 62);
                code += random[index];
            }
            create_Code.value = code;
        }

		create_Code.onmouseenter = function () {
			this.setAttribute("title", "刷新");
		}
		create_Code.onclick = function () {
			refresh();
			var inuptCode = document.getElementById("validate");
			var erroMesg = document.getElementsByClassName("erroMesg")[3];
			inuptCode.value = "";
			erroMesg.textContent = "";
		}



        //验证随机验证码
        var inuptCode = document.getElementById("validate"), inuptCodeStatus = false;
        var erroMesg = document.getElementsByClassName("erroMesg")[3];
        //验证码输入框失去焦点时
        inuptCode.onblur = function () {
            validate();
        }
        /*********************************
		 * 功能：验证码正则验证
		 *********************************/
        function validate() {
            //验证码正则表达式
            var validata_Reg = /^[a-zA-Z0-9]{5}$/gi;
            //如果没有输入内容则提示“请输入验证码”
            if(inuptCode.value == "") {
                erroMesg.textContent = "验证码不能为空";
            }
            //如果输入的内容符合正则表达式的规则，并且当前输入的值转换成小写之后等于验证码转换成小写，则清空提示信息并隐藏刷新按钮
            else if(validata_Reg.test(inuptCode.value) && inuptCode.value.toLowerCase() == code.toLowerCase()) {
                erroMesg.textContent = "";
            }
            //否则提示“验证码错误”，自动刷新当前的验证码并将输入框的内容清空
            else {
                erroMesg.textContent = "验证码错误";
                refresh();
                inuptCode.value = "";
            }
        }
        /****************************************
		 * 功能：账号验证
		 ****************************************/
        var userAcount = document.getElementById("userAcount"), userAcountStatus = false;
        userAcount.onblur = function () {
            validateAccount();
        }
        function validateAccount() {
            var erroMesg = document.getElementsByClassName("erroMesg")[0];
            var accountEmail_Reg = /^[\w\-]+@[\w\-]+\.\w+$/g;
            var accountTel_Reg = /^[1][34578]\d{9}$/g;
            if(userAcount.value == "") {
                erroMesg.textContent = "× 账号不能为空";
                erroMesg.style.color= "#f00";
			}
			else if(!accountEmail_Reg.test(userAcount.value) && !accountTel_Reg.test(userAcount.value)) {
                erroMesg.textContent = "× 您输入的邮箱或电话格式错误！";
                erroMesg.style.color= "#f00";
			}
			else {
                erroMesg.textContent = "√ 账号可用";
                erroMesg.style.color= "#3fb98a";
			}
        }

        /****************************************
         * 功能：密码验证
         ****************************************/
        var userPwd = document.getElementById("userPwd"), userPwdStatus = false;
        var userRePwd = document.getElementById("userRePwd"), userRePwdStatus = false;
        var uniformity = false;
        var userPwd_Reg = /^\S{6,16}$/g;
        userPwd.onblur = function () {
            validatePwd();
            //validateUnifomity(this);
        }
        userRePwd.onblur = function () {
            //validateRePwd();
            validateUnifomity(this);
        }
        //密码验证
        function validatePwd() {
        	var erroMesg = document.getElementsByClassName("erroMesg")[1];
			if(userPwd.value == "") {
                erroMesg.textContent = "× 密码不能为空";
                erroMesg.style.color= "#f00";
			}
			else if(!userPwd_Reg.test(userPwd.value)) {
                erroMesg.textContent = "× 您输入的密码格式错误！";
                erroMesg.style.color= "#f00";
			}
            else {
                erroMesg.textContent = "";
            }
        }
        //确认密码
        function validateRePwd() {
			var erroMesg = document.getElementsByClassName("erroMesg")[2];
            if(userPwd.value == "") {
                erroMesg.textContent = "× 密码不能为空";
                erroMesg.style.color= "#f00";
            }
            else if(!userPwd_Reg.test(userPwd.value)) {
                erroMesg.textContent = "× 您输入的密码格式错误！";
                erroMesg.style.color= "#f00";
            }
            else {
                erroMesg.textContent = "";
            }
        }

        /*******************************************
		 * 功能：两次密码一致性验证
		 *******************************************/
        function validateUnifomity(ident) {
			var thisErroMesg = ident.previousElementSibling.previousElementSibling,
				pwdErroMesg = userPwd.previousElementSibling.previousElementSibling,
				repwdErroMesg = userRePwd.previousElementSibling.previousElementSibling;
			if(userPwd.value !== userRePwd.value) {
				thisErroMesg.textContent = "两次输入密码不一致！";
				uniformity = false;
			}
			else {
				pwdErroMesg.textContent = "";
				repwdErroMesg.textContent = "";
				uniformity = true;
			}
        }
        var register2 = document.getElementById("register2");
        register2.onclick = function () {
        	//判断账号、密码、确认密码是否为空且密码是否与确认密码一致
		   	if(userAcount.value != "" && userPwd.value == userRePwd.value && userPwd.value != "" && inuptCode.value.toLowerCase() == code.toLowerCase()) {
		   		var setUserAcount = localStorage.setItem("userAcount", userAcount.value);
		   		var steUserPwd = localStorage.setItem("userPwd", userPwd.value);
		   		this.parentElement.parentElement.remove();
			   var popup_box = document.getElementsByClassName("component")[0].getElementsByTagName("popup-box")[0];
			   var form = document.createElement("form");
			   form.innerHTML = '<div class="niceName">' +
				   '<p class="niceErroMesg"></p>' +
				   '<label>昵称：</label>' +
				   '<input id="niceName" type="text" placeholder="6-16位任意字符（空格除外）">' +
				   '<span>*</span>' +
				   '</div>' +
				   '<div>' +
				   '<button id="confirm" type="button">确认</button>' +
				   '</div>';
			   popup_box.appendChild(form);
			   popup_box.style.cssText = "width: 405px; height: 210px;padding: 30px 20px;";
			   var niceName = document.getElementsByClassName("niceName")[0];
			   var confirm = document.getElementById("confirm");
			   niceName.style.cssText = "margin-bottom: 10px";
			   confirm.style.cssText = "width: 100px; border: 0; outline: none; background-color: #3c9de5;";

			   //昵称失去焦点
			   var niceName2 = document.getElementById("niceName");
				var niceName_Reg = /^\S{6,16}$/g;
			   niceName2.onblur = function () {
				   validateNicename();
			   }
			   //点击确认按钮
			   var confirm = document.getElementById("confirm");
				confirm.onclick = function () {
					if(niceName2.value !== "") {
						var regBtn = document.getElementById("register");
						var sign_inBtn = document.getElementById("sign-in");
						var niceNameVal = niceName2.value;
						var setNiceNameVal = localStorage.setItem("niceName", niceNameVal);
						this.parentElement.parentElement.parentElement.parentElement.remove();
					}
					else {
						alert("昵称填写有误！");
					}
				}
			   /**************************************
				* 功能：用户名验证
				**************************************/
			   function validateNicename() {
			   		var nice_ErroMesg = document.getElementsByClassName("niceErroMesg")[0];
					if(niceName2.value == "") {
						nice_ErroMesg.textContent = "昵称不能为空";
					}
					else if(!niceName_Reg.test(niceName2.value)) {
						nice_ErroMesg.textContent = "请输入合法的昵称";
					}
					else {
						nice_ErroMesg.textContent = "";
					}
			   }
		   }
			else {
				alert ("信息填写有误，请检查！");
		   }
        }
    }
}

/******************************************
 * 功能：关闭按钮点击事件
 ******************************************/
function closeBtn() {
    var btnClose = document.getElementsByClassName("btnClose")[0];
    btnClose.onclick = function () {
        this.parentElement.parentElement.remove();
        body.style.overflow = "";
    }
}