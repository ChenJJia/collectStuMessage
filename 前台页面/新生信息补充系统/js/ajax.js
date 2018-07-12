//var studentName=function(textInput){
//	$.ajax({
//		url:'judge_stu_name',
//		type:'POST',
//		data:{
//			"stuName":textInput.value
//		},  //给后台参数
//		dataType:'json', 
//		//success表示成功接收请求
//		success:function(checkMess){ //message表示后台返回的数据
//			if(checkMess.status=="error"){
//				var unfin = document.getElementById("unfin");
//				onclickBtn(unfin);
//				
//			}
//
//			if(checkMess.status == "accept"){
//				if(checkMess.list==null){
//					textP[0].style.display = "block";
//					heiSchool=checkMess.highschool;
//					textP[0].innerHTML =textInput[0].value+"同学，您好，请核对您的信息是否有误: </br>学号: "+checkMess.stuNo+"</br>班级: "+checkMess.classname+"</br>宿舍: "+checkMess.dormitory+"</br>毕业中学: "+checkMess.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
//				}
//				else{
//					onclickBtn(sameId);
//					sameIdTable[0].innerHTML="<tr><th>姓名</th><th>身份证后六位</th><th>选择</th><tr>";
//					sameIdTd[2].style.background = "url(../img/icon_locked_03.png) no-repeat center center";
//					for(var i=1;i<checkMess.list.length;i++){
//						sameIdTd[3*(i+1)-1].style.background = "url(../img/icon_unlock_06.png) no-repeat center center";
//					}
//					for(var i=0;i<checkMess.list.length;i++){
//						sameIdTable.innerHTML += "<tr><td>"+checkMess.list[i].stuName+"</td><td>"+checkMess.list[i].idCard+"</td><td>"+"</td></tr>";
//					}
//					sameIdHead.innerHTML="计算机工程学院</br>共有"+checkMess.list.length+"名学生与您同名</br>请选择你的身份信息: ";
//					
//				}
//			}
//
//		},
//		error:function(){
//
//			if(checkMess.status=="error"){
//				var unfin = document.getElementById("unfin");
//				onclickBtn(unfin);
//				
//			}
//			if(checkMess.status == "accept"){
//				
//				var textP = textForm.getElementsByTagName("p");
//				if(checkMess.list==null){
//					textP[0].style.display = "block";
//					heiSchool=checkMess.highschool;
//					textP[0].innerHTML =textInput[0].value+"同学，您好，请核对您的信息是否有误: </br>学号: "+checkMess.stuNo+"</br>班级: "+checkMess.classname+"</br>宿舍: "+checkMess.dormitory+"</br>毕业中学: "+checkMess.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
//				}
//				else{
//					onclickBtn(sameId);
//					sameIdTable[0].innerHTML="<tr><th>姓名</th><th>身份证后六位</th><th>选择</th><tr>";
//					sameIdTd[2].style.background = "url(../img/icon_locked_03.png) no-repeat center center";
//					for(var i=1;i<checkMess.list.length;i++){
//						sameIdTd[3*(i+1)-1].style.background = "url(../img/icon_unlock_06.png) no-repeat center center";
//					}
//					for(var i=0;i<checkMess.list.length;i++){
//						sameIdTable.innerHTML += "<tr><td>"+checkMess.list[i].stuName+"</td><td>"+checkMess.list[i].idCard+"</td><td>"+"</td></tr>";
//					}
//					sameIdHead.innerHTML="计算机工程学院</br>共有"+checkMess.list.length+"名学生与您同名</br>请选择你的身份信息: ";
//					
//				}
//			}
//		
//		}
//			
//	})
//}


var stuMessDefault={
"message": "*学生姓名格式有误",
"status": "error"
}
//var checkMess={
//"message": "未查询到您的个人信息，请检查姓名输入是否有误",
//"status": "error"
//}3

//var checkMess={
//"message": "计算机工程学院共有2名学生与您同名,请选择你的身份信息：",
// "status": "accept",
//  "list": [
//      {
//          "stuName": "啦啦啦",
//          "idCard": "123333",
//          "id": "402880945df44fa2015df44fa4ac0000"
//      },
//      {
//          "stuName": "啦啦啦",
//          "idCard": "126666",
//          "id": "402880945df463a2015df463a52a0000"
//      }
//  ]
//}

var checkMess ={
    "classname": "2017软件4班",
    "dormitory": "C10-654",
    "stuName": "杀杀杀",
    "id": "402880945df49889015df4988c5f0000",
    "message": "如信息错误请检查姓名输入是否有误；\n如信息核对正确，请您完善您的个人相关信息：",
    "stuNo": "201710000002",
    "highschool": "华南理工广州学院",
    "list":null,
    "status": "accept"
}



var sameStuName=function(stuid){
	$.ajax({
		url:'same_stu_name',
		type:'POST',
		data:{
			"id":stuid
		},  //给后台参数
		dataType:'json', 
		//success表示成功接收请求
		success:function(stuMessage){ //message表示后台返回的数据
			if(stuMessage.status == "accept"){
				heiSchool = stuMessage.highschool;
				textP[0].innerHTML = textInput[0].value+"同学，您好，请核对您的信息是否有误: </br>学号: "+stuMessage.stuNo+"</br>班级: "+stuMessage.classname+"</br>宿舍: "+stuMessage.dormitory+"</br>毕业中学: "+stuMessage.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
//				onclickBtn(sameId);
				textP[0].style.display = "block";
			}
		},
		//error表示接收请求失败
		error:function(){
//			alert("错误");
			if(stuMessage.status == "accept"){
				heiSchool = stuMessage.highschool;
				textP[0].innerHTML = textInput[0].value+"同学，您好，请核对您的信息是否有误: </br>学号: "+stuMessage.stuNo+"</br>班级: "+stuMessage.classname+"</br>宿舍: "+stuMessage.dormitory+"</br>毕业中学: "+stuMessage.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
//				onclickBtn(sameId);
				textP[0].style.display = "block";
			}
		}
			
	})
}


var stuMessage={
 "classname": "2017软件4班",
    "dormitory": "C10-655",
    "stuName": "顶顶顶",
    "id": "402880945df49889015df4988c5f0000",
    "message": "如信息错误请检查姓名输入是否有误；\n如信息核对正确，请您完善您的个人相关信息：",
    "stuNo": "201710000002",
    "highschool": "华南理工广州学院",
    "status": "accept"
}



var submitMess=function(stuId,stuPhone,parName,parPhone,province,city,county,address){
	$.ajax({
		url:'sumbit',
		type:'POST',
		data:{
			"id":stuId,
			"stuMobile":stuPhone,
			"parentName":parName,
			"parentMobile":parPhone,
			"province":province,
			"city":city,
			"county":county,
			"address":address
		},
		dataType:'json',
		success:function(result){
			if(result.status=="accept"){
			  	if(result.message==null){
					//珠宝学生
				}
				else{
					var	succeed = document.getElementById("succeed");
					succeed.style.display = "block";
				}
			}
			if(result.stuSendResult==false){   //学生发送失败，调用发送接口
				stuSend();
			}
			if(result.parentSendResult==false){
				parSend();
			}
		},
		error:function(){
			if(result.status=="accept"){
				if(result.message==null){
					//珠宝学生
				}
				else{
					var	succeed = document.getElementById("succeed");
					succeed.style.display = "block";
				}
			}
		}
	});
}
var stuSend=function(){
	$.ajax({
		url:'send_stu_SMS',
		type:'GET',
		dataType:'json',
		success:function(stuResult){
			if(stuResult.stuSendResult==false){
				stuSend();
			}
		}
	});
}
var parSend=function(){
	$.ajax({
		url:'send_parent_SMS',
		type:'get',
		dataType:'json',
		success:function(parResult){
			if(parResult.parentSendResult==false){
				parSend();
			}
		}
	});
}
var result={
    "stuSendResult": true,
    "message":null,
    "parentSendResult": true,
    "status": "accept"
}
var stuResult={
    "stuSendResult": true
}
var parResult={
    "parentSendResult": true
}