var stuMessDefault={
"message": "*学生姓名格式有误",
"status": "error"
}


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
				textP[0].style.display = "block";
			}
			if (stuMessage.status=="error"){				
				var unfin = document.getElementById("unfin");					
				unfinHead[0].innerHTML = stuMessage.message;
				onclickBtn(unfin);
			}
		},
		//error表示接收请求失败
		error:function(){
			alert("错误");
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
			alert("数据接收错误");
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
		},
		error:function(){
			alert("数据接收失败");
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
		},
		error:function(){
			alert("数据接收失败");
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