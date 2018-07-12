var textForm = document.getElementById("textForm"),
textInput = textForm.getElementsByTagName("input");

function myFunction1(x) {
	if(x.value == "请输入学生姓名"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入学生姓名";
		x.style.borderBottom = "1px solid #666";
	}
	else if(x.value != "请输入学生姓名"){
		x.style.borderBottom = "1px solid #666";
	}
}
function myFunctionOnblur(x){
	submit();
	if(x.value == "请输入学生姓名"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入学生姓名";
		x.style.borderBottom = "1px solid #666";
	}
	else if(x.value != "请输入学生姓名"){
		x.style.borderBottom = "1px solid #666";
		if(!re.test(textInput[0].value)&&textInput[0].value.toString().length>1){
			studentName(textInput[0].value);
		}			
	}
	
		
}
function myFunction2(x) {
	
	if(x.value == "请输入学生电话"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入学生电话";
		x.style.borderBottom = "1px solid #666";
	}
	else if(x.value != "请输入学生电话"){
		x.style.borderBottom = "1px solid #666";
	}
}
function myFunction3(x) {
	if(x.value == "请输入家长姓名"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入家长姓名";
		x.style.borderBottom = "1px solid #666";
	}	
	else if(x.value != "请输入家长姓名"){
		x.style.borderBottom = "1px solid #666";
	}
}
function myFunction4(x) {
	if(x.value == "请输入家长电话"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入家长电话";
		x.style.borderBottom = "1px solid #666";
	}	
	else if(x.value != "请输入家长电话"){
		x.style.borderBottom = "1px solid #666";
	}
}
function myFunction5(x) {
	if(x.value == "请选择家庭地址"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请选择家庭地址";
		x.style.borderBottom = "1px solid #666";
	}	
	else if(x.value != "请选择家庭地址"){
		x.style.borderBottom = "1px solid #666";
	}
}
function myFunction6(x) {
	if(x.value == "请输入详细地址（具体到门牌）"){
		x.value = "";
		x.style.borderBottom = "1px solid greenyellow";
	}
	else if(x.value == ""){
		x.value = "请输入详细地址（具体到门牌）";
		x.style.borderBottom = "1px solid #666";
	}	
}


var	wrap = document.getElementById("wrap"),
		main  =document.getElementById("main"),
		body = document.getElementsByTagName("body"),
		textButton = document.getElementsByTagName("button"),
		textP = textForm.getElementsByTagName("p"),
		txt = document.getElementsByClassName("text"),
		sele = document.getElementsByClassName("sele")
		shade = document.getElementById("shade"),
		unfin = document.getElementById("unfin"),
		unfinHead = document.getElementsByTagName("p"),
		unfinBtn = unfin.getElementsByTagName("span"),
		succeed = document.getElementById("succeed"),
		sameId = document.getElementById("sameId"),
		sameIdBtn = sameId.getElementsByTagName("span"),
		sameIdHead = sameId.getElementsByTagName("h3"),
		sameIdTd = sameId.getElementsByTagName("td"),
		sameIdTable = sameId.getElementsByTagName("table"),
		check = document.getElementById("check"),
		checkLi = check.getElementsByTagName("li"),
		stuName = checkLi[0].getElementsByTagName("span"),
		btn = document.getElementsByClassName("btn"),
		checkCertain = btn[1].getElementsByTagName("span"),
		succeedCertain = succeed.getElementsByTagName("div")
		hid = document.getElementsByClassName("hid"),
		heiSchool="",
		re =  /[^\u4e00-\u9fa5]/,
		ren = /^[0-9]*$/ ,
		reAdress = /[\w\u4e00-\u9fa5]/;

function submit(){
	
	if(textInput[0].value!="请输入学生姓名" && textInput[1].value!="请输入学生电话" 
	&& textInput[2].value!="请输入家长姓名" && textInput[3].value!="请输入家长电话" 
	&& textInput[4].value!="" && textInput[5].value!="请输入详细地址（具体到门牌）" 
	&& textInput[0].value!="" && textInput[1].value!="" && textInput[2].value!="" 
	&& textInput[3].value!="" && textInput[4].value!="" && textInput[5].value!="" 
	&& textInput[0].value.toString().length>1 && textInput[2].value.toString().length>1
	&& textP[0].innerHTML.length>50 
	&& ren.test(textInput[3].value) && ren.test(textInput[1].value) 
	&& !re.test(textInput[0].value) && !re.test(textInput[2].value) && textP[0].style.display != "none"
	&& textInput[1].value.toString().length==11 && textInput[3].value.toString().length==11
	&& textInput[1].value!=textInput[3].value && textInput[0].value!=textInput[2].value){
		textButton[0].style.background = "linear-gradient(45deg,yellowgreen,greenyellow)";
		hid[6].style.display = "none";
		textP[1].style.display = "none";
		textP[3].style.display = "none";
		}
	else{
		textButton[0].style.background ="darkgrey";
		textButton[0].style.backgroundColor ="darkgrey";
		hid[6].style.display = "block";
		
	}	
}


window.onload = function () {
	

	
	function num (n) {
		
		var bind_name = 'input';
    	if (navigator.userAgent.indexOf("MSIE") != -1){
    		bind_name = 'propertychange';
	     }
		$(textInput[n]).bind(bind_name,function () {
			submit();
			var result = ren.test(textInput[n].value);
			textInput[n].style.borderBottom = "1px solid greenyellow";
			if(result && textInput[n].value != ""){
				if(textInput[1].value == textInput[3].value){
					textP[n].style.display = "block";
					textP[n].innerHTML = "家长电话与学生电话不能一致";
					if(n==3){
						textP[1].style.display = "none";
					}
					if(n==1)
						textP[3].style.display = "none";
				}
				else if(textInput[n].value.toString().length < 11 ){
					textP[n].style.display = "none";
					if(n==3 && textP[1].innerHTML=="家长电话与学生电话不能一致"){
						textP[1].style.display = "none";
					}
					if(n==1 && textP[1].innerHTML=="家长电话与学生电话不能一致")
						textP[3].style.display = "none";
				}
				else if(textInput[1].value != textInput[3].value){
				textP[n].style.display = "none";
				if(n==3 && textP[1].innerHTML=="家长电话与学生电话不能一致"){
					textP[1].style.display = "none";
				}
				if(n==1 && textP[1].innerHTML=="家长电话与学生电话不能一致")
					textP[3].style.display = "none";
				hid[n+1].style.display="none";
	 			textInput[n+1].style.borderBottom = "1px solid #666";
	 			textInput[n+1].style.color = "#666";
				}
				else{
					textP[n].style.display = "none";
					if(n==3 && textP[1].innerHTML=="家长电话与学生电话不能一致"){
						textP[1].style.display = "none";
					}
					if(n==1 && textP[1].innerHTML=="家长电话与学生电话不能一致")
						textP[3].style.display = "none";
				}
				if(textInput[n].value[0]!=1 && textInput[n].value.toString().length != "" && (textInput[n].value[0]>=2 || textInput[n].value[0]==0)){
				textP[n].style.display = "block";
				textP[n].innerHTML =  "电话号码格式不正确";
				}
			}
			
			else{
				textP[n].style.display = "block";
				textP[n].innerHTML = "请输入11位纯数字";
			}
			if(textInput[n].value.toString().length == ""){
				textP[n].style.display = "none";
			}
			
			if(n==1){
				if(textInput[3].value.toString().length==11 && textP[3].innerHTML=="家长电话与学生电话不能一致" && textInput[3].value!="请输入家长电话"){			
					hid[4].style.display = "none";
					textInput[4].style.borderBottom = "1px solid #666";
					textInput[4].style.color = "#666";
					textP[3].style.display = "none";
				}
			}
		})
		
	}

	
	num(1);
	num(3);
	
	textInput[2].onclick = function () {
		if(textInput[0].value == textInput[2].value){
			textP[0].style.color = "#b3b3b3";
			textP[2].style.display = "block";
		}
	}


 $("#city-picker").cityPicker({
    title: "选择省市区/县",
    onChange: function (picker, values, displayValues) {
        console.log(values, displayValues);
    }
});
	var bind_name = 'input';
    	if (navigator.userAgent.indexOf("MSIE") != -1){
    		bind_name = 'propertychange';
     }
	$(textInput[2]).bind(bind_name,function () {
		submit();
		var result = re.test(textInput[2].value);
		textInput[2].style.borderBottom = "1px solid greenyellow";
		if(!result){
			
			if(textInput[0].value == textInput[2].value){
				textP[2].style.display = "block";
				textP[2].innerHTML = "家长姓名与学生姓名不能一致";
				textP[0].style.color = "#b3b3b3";
				txt[1].style.marginTop = "2px";
			}
			else{
				textP[2].style.display = "none";
				textP[0].style.color = "#b3b3b3";
				txt[1].style.marginTop = "2px";
			}
				
			if(textInput[2].value.toString().length > 1 && textInput[0].value != textInput[2].value){
				hid[3].style.display = "none";
				textInput[3].style.borderBottom = "1px solid #666";
	 			textInput[3].style.color = "#666";
			}
			
		}
		else{
			textP[2].style.display = "block";
			textP[2].innerHTML = "姓名不是符号，表情等";
		}
		if(re.test(textInput[0].value)){
			textP[0].style.color = "#ff5c64";
		}
	})


	var bind_name = 'input';
    	if (navigator.userAgent.indexOf("MSIE") != -1){
    		bind_name = 'propertychange';
     }
	$(textInput[5]).bind(bind_name,function () {
		submit();
		
	})
	

	var bind_name = 'input';
    	if (navigator.userAgent.indexOf("MSIE") != -1){
    		bind_name = 'propertychange';
     }
	$(textInput[0]).bind(bind_name,function () {
		submit();
		var result= re.test(textInput[0].value);
		if(!result){
			textP[0].style.display = "block";
			
			if(textInput[0].value == textInput[2].value){
				textP[0].innerHTML = "家长姓名与学生姓名不能一致"	;
				textP[0].style.color = "#ff5c64";
				if(textP[2].style.display != "家长姓名与学生姓名不能一致")
					textP[2].style.display = "none";
			}
			
	     	
	     	else if(textInput[0].value.toString().length>1){
     			hid[1].style.display = "none";	
     			textInput[1].style.borderBottom = "1px solid #666";
     			textInput[1].style.color = "#666";		     			
     			textP[0].style.color = "#b3b3b3";
				textP[0].innerHTML = textInput[0].value+"同学，您好，请核对您的信息是否有误: </br>学号: </br>班级: </br>宿舍: </br>毕业中学: </br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";

				txt[1].style.marginTop = "2px";
				textP[0].style.display = "none";
				
	     	}
	     	else{
	     		textP[0].style.display = "none";
	     	}
		}
		else{
	     	textP[0].style.display = "block";
			textP[0].style.color = "#ff5c64";
			textP[0].innerHTML = "姓名不能是符号，表情等";
		}
		if(textInput[2].value.toString().length>1 && textP[2].innerHTML=="家长姓名与学生姓名不能一致" && textInput[2].value!="请输入家长姓名"){
			
			hid[3].style.display = "none";
			textInput[3].style.borderBottom = "1px solid #666";
			textInput[3].style.color = "#666";
			textP[2].style.display = "none";
		}
	})
	submit();
	
	if(textInput[0]=="请输入学生姓名" || textInput[1]=="请输入学生电话" || textInput[2]=="请输入家长姓名" || textInput[3]=="请输入家长电话" || textInput[4]=="请选择家庭地址" || textInput[5]=="请输入详细地址（具体到门牌）"){
		hid[6].style.display = "block";
	}
	else {
		hid[6].style.display = "block";
	}
	
	textButton[0].onclick = function () {
		shade.style.display = "block";
		check.style.display = "block";
		textButton[0].style.visibility = "hidden";
		textForm.style.visibility = "hidden";
		stuName[1].innerHTML = textInput[0].value;
		checkLi[1].innerHTML = "毕业中学: "+heiSchool;
		checkLi[2].innerHTML = "学生电话: "+textInput[1].value;
		checkLi[3].innerHTML = "家长姓名: "+textInput[2].value;
		checkLi[4].innerHTML = "家长电话: "+textInput[3].value;
		checkLi[5].innerHTML = "家庭住址: "+textInput[4].value+textInput[5].value;
	}
	
	
	
	checkCertain[0].onclick = function () {
		shade.style.display = "none";
		check.style.display = "none";
		textButton[0].style.visibility = "visible";
		textForm.style.visibility = "visible";
	}
	
	succeedCertain[0].onclick = function () {
		succeed.style.display = "none";
		textButton[0].style.visibility = "visible";
		textForm.style.visibility = "visible";
		shade.style.display = "none";
		window.location.href="https://508cst.edu.cn/ZeroOne/more/more.html";
	}
	
	sameIdBtn[0].onclick = function () {
		sameId.style.display = "none";
		textButton[0].style.visibility = "visible";
		textForm.style.visibility = "visible";
		shade.style.display = "none";
	}
	
}


function onclickBtn(m){
		m.style.display = "block";
		textButton[0].style.visibility = "hidden";
		textForm.style.visibility = "hidden";
		shade.style.display = "block";
	}


unfinBtn[0].onclick = function () {
	unfin.style.display = "none";
	textButton[0].style.visibility = "visible";
	textForm.style.visibility = "visible";
	shade.style.display = "none";
	textButton[0].style.background = "linear-gradient(45deg,yellowgreen,greenyellow)";
	hid[6].style.display="none";
}

var certainId;
var studentName=function(textInput){
	$.ajax({
		url:'judge_stu_name',
		type:'POST',
		data:{
			"stuName":textInput
		},  //给后台参数
		dataType:'json', 
		//success表示成功接收请求
		success:function(checkMess){ //message表示后台返回的数据
			if(checkMess.status=="error"){				
					var unfin = document.getElementById("unfin");					
					unfinHead[0].innerHTML = checkMess.message;
					onclickBtn(unfin);
			}
			if(checkMess.status == "accept"){
				var textP = textForm.getElementsByTagName("p");
				if(checkMess.list==null){
					certainId = checkMess.id;
					textP[0].style.display = "block";
					heiSchool=checkMess.highschool;
					textP[0].innerHTML =textInput+"同学，您好，请核对您的信息是否有误: </br>学号: "+checkMess.stuNo+"</br>班级: "+checkMess.classname+"</br>宿舍: "+checkMess.dormitory+"</br>毕业中学: "+checkMess.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
				}
				else{
					sameIdHead[0].innerHTML="共有"+checkMess.list.length+"名学生与您同名</br>请选择你的身份信息: ";
					sameIdTable[0].innerHTML="<tr><th>姓名</th><th>身份证后六位</th><th>选择</th><tr>";
					for(var i=0;i<checkMess.list.length;i++){
						sameIdTable[0].innerHTML += "<tr><td>"+checkMess.list[i].stuName+"</td><td>"+checkMess.list[i].idCard+"</td><td class='sele'></td></tr>";
					}
					sameIdTd[2].style.background = "url(res/front/img/icon_locked_03.png) no-repeat center center";
					sameIdTd[2].style.backgroundSize = "1rem auto";
					for(var i=1;i<checkMess.list.length;i++){
						sameIdTd[3*(i+1)-1].style.background = "url(res/front/img/icon_unlock_06.png) no-repeat center center";
						sameIdTd[3*(i+1)-1].style.backgroundSize = "1rem auto";
					}
					onclickBtn(sameId);
					
					if(checkMess.list!=null){	
						for(var i=0;i<checkMess.list.length;i++){
							sameIdTd[3*(i+1)-1].onclick = function () {
								var self = this;
								for(var j=0;j<checkMess.list.length;j++){
									if(self!=sameIdTd[3*(j+1)-1]){
										sameIdTd[3*(j+1)-1].style.background = "url(res/front/img/icon_unlock_06.png) no-repeat center center";
										sameIdTd[3*(j+1)-1].style.backgroundSize = "1rem 1rem";
										
									}
									else{
										sameIdTd[3*(j+1)-1].style.background = "url(res/front/img/icon_locked_03.png) no-repeat center center";
										sameIdTd[3*(j+1)-1].style.backgroundSize = "1rem 1rem";	
										
									}
								}
							}
						}
					}
					sameIdBtn[1].onclick = function(){
						
						for(var i=0;i<checkMess.list.length;i++){
							if(sameIdTd[3*(i+1)-1].style.backgroundImage!='url("res/front/img/icon_unlock_06.png")'){
								certainId = checkMess.list[i].id;
								sameStuName(certainId);
							}
						}
						sameId.style.display = "none";
						textButton[0].style.visibility = "visible";
						textForm.style.visibility = "visible";
						shade.style.display = "none";
						textP[0].style.display = "block";
						submit();
					}
				}
			}
		
		},

		error:function(){
			alert("数据接收失败");
		}
	
	});
}
var city_picker=document.getElementById("city-picker");
city_picker.onclick = function () {
		txt[5].style.display = "block";
		textInput[5].style.borderBottom = "1px solid #666";
 		textInput[5].style.color = "#666";

}
checkCertain[1].onclick = function () {
	var s=city_picker.value;  //获取省市区
	var home= new Array();
	home=s.split(" ");
	var province=home[0];    //省份
	var city=home[1];      //城市
	var county=home[2];   //区县
	submitMess(certainId,textInput[1].value,textInput[2].value,textInput[3].value,province,city,county,textInput[5].value);
	check.style.display = "none";
}