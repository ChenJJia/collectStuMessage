var stuMessDefault={
"message": "*学生姓名格式有误",
"status": "error"
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
		success:function(stuMessage){//message表示后台返回的数据
			if(stuMessage.status == "accept"){
				heiSchool = stuMessage.highschool;
				textP[0].innerHTML = textInput[0].value+"同学，您好，请核对您的信息是否有误: <br />学号: "+stuMessage.stuNo+"<br />班级: "+stuMessage.classname+"<br />宿舍号："+stuMessage.dormitory+"</br>毕业中学: "+stuMessage.highschool+"</br>如信息错误请检查姓名是否输入有误;</br>如信息核对正确，请您完善您的个人相关信息;";
				textP[0].style.display = "block";
			}
			if(stuMessage.status == "error"){	
				var unfin = document.getElementById("unfin");					
				unfinHead[0].innerHTML = stuMessage.message;
				onclickBtn(unfin);
			}
		},
		//error表示接收请求失败
		error:function(){
			alert("请刷新页面");
		}
			
	})
}

var submitId=function(stuid){
	$.ajax({
		url:'same_stu_name',
		type:'POST',
		data:{
			"id":stuid
		},  //给后台参数
		dataType:'json', 
		//success表示成功接收请求
		success:function(submitId){
			if(submitId.status == "accept"){
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
			if(submitId.status == "error"){
				var unfin = document.getElementById("unfin");					
				unfinHead[0].innerHTML = submitId.message;
				onclickBtn(unfin);
			}
		},
		//error表示接收请求失败
		error:function(){
			alert("请刷新页面");
		}
	})
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
			"address":address,
			"token":token
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
		},
		error:function(){
			alert("请刷新页面");
		}
	});
}